export type ChatRole = "system" | "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
}

export interface ToolContext {
  message: string;
  history: ChatMessage[];
}

export interface Tool {
  name: string;
  canHandle(context: ToolContext): boolean | Promise<boolean>;
  execute(context: ToolContext): Promise<string>;
}

export interface ChatConfig {
  model?: string;
  systemPrompt?: string;
  tools?: Tool[];
  temperature?: number;
  initialMessages?: ChatMessage[];
}
