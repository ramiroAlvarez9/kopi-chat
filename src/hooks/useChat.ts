import { useCallback, useEffect, useRef, useState } from "react";
import { createChatCompletion } from "../services/openaiClient";
import type { ChatConfig, ChatMessage } from "../types/chat";

interface UseChatConfig extends ChatConfig {
  placeholderToolResult?: string;
}

interface UseChatResult {
  messages: ChatMessage[];
  inputValue: string;
  isLoading: boolean;
  error: string | null;
  setInputValue(value: string): void;
  sendMessage(message: string): Promise<void>;
  cancel(): void;
  retry(): void;
}

const DEFAULT_GREETING: ChatMessage = {
  id: "assistant-greeting",
  role: "assistant",
  content: "Hello! I'm your Kopius Assistant. How can I help you?",
  createdAt: new Date().toISOString(),
};

export function useChat(config: UseChatConfig = {}): UseChatResult {
  const {
    model,
    systemPrompt,
    temperature,
    tools = [],
    initialMessages,
  } = config;

  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initialMessages && initialMessages.length > 0
      ? initialMessages
      : [DEFAULT_GREETING],
  );
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingUserMessage, setPendingUserMessage] =
    useState<ChatMessage | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesRef = useRef<ChatMessage[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const createMessageId = () =>
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `msg-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const runTools = useCallback(
    async (content: string, history: ChatMessage[]) => {
      if (tools.length === 0) {
        return false;
      }

      for (const tool of tools) {
        try {
          const shouldHandle = await tool.canHandle({ message: content, history });
          if (!shouldHandle) {
            continue;
          }

          const toolResult = await tool.execute({ message: content, history });
          if (!toolResult) {
            continue;
          }

          const toolMessage: ChatMessage = {
            id: createMessageId(),
            role: "assistant",
            content: toolResult,
            createdAt: new Date().toISOString(),
          };

          setMessages((previous) => [...previous, toolMessage]);
          return true;
        } catch (toolError) {
          console.error(`[Tool:${tool.name}] failed`, toolError);
        }
      }

      return false;
    },
    [tools],
  );

  const requestCompletion = useCallback(
    async (history: ChatMessage[]) => {
      setError(null);

      try {
        abortControllerRef.current = new AbortController();

        const openAiMessages = [
          ...(systemPrompt
            ? [
              {
                role: "system" as const,
                content: systemPrompt,
              },
            ]
            : []),
          ...history.map(({ role, content }) => ({
            role,
            content,
          })),
        ];

        const content = await createChatCompletion({
          messages: openAiMessages,
          model,
          signal: abortControllerRef.current.signal,
        });

        const assistantMessage: ChatMessage = {
          id: createMessageId(),
          role: "assistant",
          content,
          createdAt: new Date().toISOString(),
        };

        setMessages((previous) => [...previous, assistantMessage]);
        setPendingUserMessage(null);
      } catch (completionError) {
        if (completionError instanceof DOMException && completionError.name === "AbortError") {
          return;
        }

        console.error("OpenAI request failed", completionError);

        const message =
          completionError instanceof Error
            ? completionError.message
            : "Something went wrong while contacting OpenAI.";
        setError(message);
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [model, systemPrompt, temperature],
  );

  const sendMessage = useCallback(
    async (rawContent: string) => {
      if (isLoading) {
        return;
      }

      const content = rawContent.trim();
      if (!content) {
        return;
      }

      const userMessage: ChatMessage = {
        id: createMessageId(),
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };

      setMessages((previous) => [...previous, userMessage]);
      setInputValue("");
      setIsLoading(true);
      setPendingUserMessage(userMessage);

      const history = [...messagesRef.current, userMessage];

      const handledByTool = await runTools(content, history);
      if (handledByTool) {
        setIsLoading(false);
        setPendingUserMessage(null);
        return;
      }

      await requestCompletion(history);
    },
    [isLoading, requestCompletion, runTools],
  );

  const cancel = useCallback(() => {
    if (!abortControllerRef.current) {
      return;
    }

    abortControllerRef.current.abort();
    setIsLoading(false);
    setPendingUserMessage(null);
    setError(null);
  }, []);

  const retry = useCallback(() => {
    if (!pendingUserMessage || isLoading) {
      return;
    }

    setIsLoading(true);
    const history = messagesRef.current;
    void requestCompletion(history);
  }, [isLoading, pendingUserMessage, requestCompletion]);

  return {
    messages,
    inputValue,
    isLoading,
    error,
    setInputValue,
    sendMessage,
    cancel,
    retry,
  };
}
