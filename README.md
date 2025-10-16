# React Chatbot Template

Minimal, extensible chat UI scaffold built with **React + Vite + TypeScript**. It behaves like a thin wrapper around ChatGPT by forwarding the chat history to the OpenAI Chat Completions API and rendering responses with a friendly assistant avatar.

## Features
- Clean, responsive chat surface with message history, typing indicator, and cancel/retry controls.
- Centralised `useChat` hook that manages history, OpenAI calls, abort handling, and future tool integrations.
- Service layer for OpenAI requests with strict error handling.
- Ready-to-use environment variable setup with `.env.example`.
- Strong TypeScript defaults (strict mode, `tsc --noEmit` in build) and React 19.

## Getting started
```bash
pnpm install
cp .env.example .env
# edit .env and add your OpenAI API key
pnpm dev
```

Open `http://localhost:5173` to try the chatbot.

## Configuration
- `VITE_OPENAI_API_KEY` – required; the OpenAI secret key used for requests.
- `useChat` options (see `src/hooks/useChat.ts`):
  - `model` – override the default `gpt-4o-mini`.
  - `systemPrompt` – seed instructions for the assistant.
  - `tools` – register future tool integrations (see below).
  - `temperature` – fine-tune response creativity.

## Project structure
```
src/
  components/       UI primitives for the chat surface
  hooks/            useChat hook with abort/retry logic
  services/         API client for OpenAI
  types/            Shared chat and tool interfaces
  styles.css        Minimal styling (light & dark aware)
```

## Extending with tools
`useChat` accepts an optional `tools` array. Each tool implements:
```ts
interface Tool {
  name: string;
  canHandle(context): boolean | Promise<boolean>;
  execute(context): Promise<string>;
}
```
When `canHandle` returns true, `execute` is invoked instead of calling OpenAI, allowing you to plug in custom data sources or actions before falling back to the model.

## Production tips
- Protect your API key by proxying requests through a backend before deploying.
- Add caching or rate limiting if you expect high traffic.
- Replace the static avatar (`public/bot-avatar.svg`) with your brand assets.
- Consider persisting chat history (e.g. `localStorage` or your backend) for session continuity.

## Scripts
- `pnpm dev` – start the Vite dev server.
- `pnpm build` – type-check and build for production.
- `pnpm preview` – preview the production build locally.
- `pnpm type-check` – run TypeScript in isolation.
