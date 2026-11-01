import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/**", "dist/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: typescriptParser,
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
    },
    // TypeScript (astro check) resolves globals such as fetch and URL; no-undef cannot see lib types.
    rules: { "no-undef": "off" },
  },
];
