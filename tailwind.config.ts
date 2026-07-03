import type { Config } from "tailwindcss";

// Palette extracted from public/atlas-enrollment-logo.png (AE-8). The logo's
// navy wordmark and medium-blue "A"/rocket mark share one hue family (H≈0.60
// in HSL) at different lightness — so this is one scale, anchored at the
// exact extracted colors (500 = logo blue, 900 = logo navy), not two
// unrelated colors. "atlas-silver" is the light gray from the "A" mark.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "atlas-blue": {
          50: "#f4f8fd",
          100: "#e0eaf9",
          200: "#b9cff1",
          300: "#8eb1e8",
          400: "#5e90de",
          500: "#2569d2",
          600: "#1d52a6",
          700: "#143c7c",
          800: "#0d2855",
          900: "#071836"
        },
        "atlas-silver": "#e9eaeb"
      }
    }
  },
  plugins: []
};

export default config;
