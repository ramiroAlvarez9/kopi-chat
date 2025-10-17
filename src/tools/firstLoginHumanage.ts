import type { Tool } from "../types/chat";
import { formatHumanageInstructions } from "../data/humanageInstructions";

function wantsEnglish(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("english") ||
    normalized.includes("inglés") ||
    normalized.includes("ingles")
  );
}

export const firstLoginHumanageTool: Tool = {
  name: "first-login-humanage",
  async canHandle({ message }) {
    return message.toLowerCase().includes("humanage");
  },
  async execute({ message }) {
    const language = wantsEnglish(message) ? "en" : "es";
    return formatHumanageInstructions(language);
  },
};

