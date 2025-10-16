import type { ChatRole } from "../types/chat";

const OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";

export interface OpenAIChatMessage {
  role: ChatRole;
  content: string;
}

export interface CreateChatCompletionOptions {
  messages: OpenAIChatMessage[];
  model?: string;
  temperature?: number;
  signal?: AbortSignal;
}

interface OpenAIErrorBody {
  error?: {
    message?: string;
    type?: string;
    code?: string;
  };
}

interface OpenAIChatCompletionResponse {
  choices?: Array<{
    message?: {
      role?: string;
      content?: string;
    };
    finish_reason?: string;
  }>;
}

export async function createChatCompletion(
  options: CreateChatCompletionOptions,
): Promise<string> {
  const { messages, model = "gpt-4o-mini", temperature = 0.7, signal } = options;
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing OpenAI API key. Set VITE_OPENAI_API_KEY in your environment.",
    );
  }

  const response = await fetch(OPENAI_CHAT_COMPLETIONS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
    }),
    signal,
  });

  if (!response.ok) {
    const errorBody = await safeParseJson<OpenAIErrorBody>(response);
    const message =
      errorBody?.error?.message ??
      `OpenAI request failed with status ${response.status}`;
    throw new Error(message);
  }

  const data =
    (await safeParseJson<OpenAIChatCompletionResponse>(response)) ?? {};
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  return content;
}

async function safeParseJson<T>(response: Response): Promise<T | null> {
  try {
    return (await response.json()) as T;
  } catch {
    return null;
  }
}
