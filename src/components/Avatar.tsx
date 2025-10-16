import { memo } from "react";

interface AvatarProps {
  size?: number;
  alt?: string;
  variant?: "assistant" | "user";
  label?: string;
}

const assistantAvatarUrl = "/bot-avatar.svg";

function AvatarComponent({
  size = 40,
  alt = "Assistant avatar",
  variant = "assistant",
  label = "You",
}: AvatarProps) {
  if (variant === "assistant") {
    return (
      <img
        className="avatar avatar--assistant"
        src={assistantAvatarUrl}
        alt={alt}
        width={size}
        height={size}
      />
    );
  }

  return (
    <div
      className="avatar avatar--user"
      style={{ width: size, height: size }}
      aria-label={alt}
      role="img"
    >
      {label.slice(0, 2).toUpperCase()}
    </div>
  );
}

const Avatar = memo(AvatarComponent);
Avatar.displayName = "Avatar";

export default Avatar;
