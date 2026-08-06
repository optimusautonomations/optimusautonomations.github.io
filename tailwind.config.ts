import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", "Montserrat", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "industrial-sm": "0 18px 45px -28px rgb(15 23 42 / 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
