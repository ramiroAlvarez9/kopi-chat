import type { ChatMessage } from "../types/chat";
import Avatar from "./Avatar";

interface MessageBubbleProps {
  message: ChatMessage;
}

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
});

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return timeFormatter.format(date);
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isAssistant = message.role === "assistant";
  const contentLines = message.content.split("\n");

  return (
    <div
      className={`message ${isAssistant ? "message--assistant" : "message--user"}`}
    >
      <Avatar
        variant={isAssistant ? "assistant" : "user"}
        alt={isAssistant ? "Assistant avatar" : "User avatar"}
        label="You"
      />
      <div className="message__content">
        <div className="message__bubble">
          {contentLines.map((line, index) => (
            <span key={`line-${index}`}>
              {line}
              {index < contentLines.length - 1 && <br />}
            </span>
          ))}
        </div>
        <span className="message__timestamp">{formatTimestamp(message.createdAt)}</span>
      </div>
    </div>
  );
}
