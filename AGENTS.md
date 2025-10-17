# Repository Guidelines

## Project Structure & Module Organization
The Vite + React source lives in `src/`. UI primitives sit in `src/components`, shared chat types in `src/types`, the OpenAI client in `src/services/openaiClient.ts`, and the stateful `useChat` hook in `src/hooks`. Styling resides in `src/styles.css` and feature-specific snippets stay close to their components. Static assets such as the assistant avatar are served from `public/`, while `index.html` bootstraps the app shell.

## Build, Test, and Development Commands
Use pnpm. `pnpm dev` starts the Vite server on http://localhost:5173/. `pnpm build` performs a strict TypeScript check before creating a production bundle. `pnpm preview` serves the built assets for smoke testing. `pnpm type-check` runs TypeScript alone; run it before committing refactors.

## Coding Style & Naming Conventions
Follow the existing 2-space indentation and TypeScript strict mode. Name React components and files with PascalCase (e.g., `MessageList.tsx`), hooks with `use*` camelCase (e.g., `useChat`), and CSS classes in kebab-case. Keep side effects inside hooks or services, and keep UI components presentational with props typed in `src/types/chat.ts`.

## Testing Guidelines
The project does not yet ship with automated tests; rely on `pnpm type-check` plus manual verification in the browser. When adding logic-heavy features, introduce Vitest alongside Vite, store specs under `src/__tests__/`, and mirror file names (`MessageList.test.tsx`). Document any new test commands in `package.json`.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (e.g., `feat: support message retries`) as shown in the history. Break work into focused commits that keep the build green. Pull requests should describe the change, link related issues, note configuration updates, and include screenshots or screen recordings for UI tweaks.

## Configuration & Secrets
Copy `.env.example` to `.env` and provide `VITE_OPENAI_API_KEY` with a valid secret; never commit real keys. Local development hits the OpenAI Chat Completions API through `src/services/openaiClient.ts`; use mock responses or adapters in tests to avoid live network calls.
