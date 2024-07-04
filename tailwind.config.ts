import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yahei': ['Microsoft YaHei UI', 'sans-serif'],
        'script': ['Segoe Script', 'cursive']
      },
      colors: {
        primary: '#FFAF56',
        secondary : '#353A4F',
      },
    },
  },
  plugins: [],
};

export default config;
