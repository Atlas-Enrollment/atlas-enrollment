import type { Config } from "tailwindcss";

// Brand colors/typography are pending AE-8 (brand assets) — using Tailwind
// defaults until then rather than inventing a palette.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
