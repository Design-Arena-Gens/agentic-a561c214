import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0F172A",
        "brand-secondary": "#38BDF8",
        "brand-accent": "#F472B6",
        "brand-muted": "#94A3B8",
        "brand-surface": "#F8FAFC"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        fly: "0 20px 80px -25px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ]
};

export default config;
