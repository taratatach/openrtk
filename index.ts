/**
 * OpenCode plugin entry point.
 *
 * OpenCode's directory plugin discovery (Host.resolve) only looks for a root
 * `index.*` (or `server.*`) file — it ignores package.json "main". This
 * re-export makes the repository loadable as a directory plugin, straight from
 * `src/` (OpenCode transpiles TypeScript on the fly, no build needed).
 */
export { default } from "./src/index"
