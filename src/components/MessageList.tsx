import { useEffect, useRef } from "react";
import type { ChatMessage } from "../types/chat";
import Avatar from "./Avatar";
import MessageBubble from "./MessageBubble";

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  return (
    <div ref={containerRef} className="message-list">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading ? (
        <div className="message message--assistant message--pending">
          <Avatar alt="Assistant avatar" />
          <div className="message__content">
            <div className="message__bubble message__bubble--ghost">
              <span className="typing-indicator" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="sr-only">Assistant is thinking</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
