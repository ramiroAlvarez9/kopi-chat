import type { Tool } from "../types/chat";
import { formatCorporateAnswer } from "../data/corporateInfo";

const KEYWORDS = [
  "kopius",
  "empresa",
  "corporativo",
  "corporate",
  "servicio",
  "service",
  "digital",
  "mission",
  "visión",
  "vision",
  "valor",
  "values",
  "story",
  "historia",
  "origen",
  "objetivo",
  "objective",
  "leaders",
  "lider",
  "equipo",
  "team",
  "contact",
  "contacto",
  "beneficio",
  "benefits",
  "holiday",
  "feriado",
  "cliente",
  "clients",
  "ubicación",
  "location",
  "office",
  "recruiting",
  "operaciones",
  "operational",
  "delivery",
  "people",
  "it support",
  "referra",
  "programa",
];

function matchesCorporateIntent(message: string): boolean {
  const normalized = message.toLowerCase();
  return KEYWORDS.some((keyword) => normalized.includes(keyword));
}

export const corporateInfoTool: Tool = {
  name: "corporate-info",
  async canHandle({ message }) {
    return matchesCorporateIntent(message);
  },
  async execute({ message }) {
    return formatCorporateAnswer(message);
  },
};

