import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgAccent: "#0c0a09",
        primary: "#dacd29"
      },
      inset: {
        "450": "450px",
        "900": "900px"
      }
    },
  },
  plugins: [],
} satisfies Config;
