import { themeConfig } from "./config/theme.config";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "theme-light-bg": "#F5EAFF",
        "theme-light-foreground": "#911DEC",
        "theme-light-card": "#FFFFFF",
        "theme-light-primary": "#911DEC",
        "theme-light-secondary": "#F5EAFF",
        "theme-light-border": "rgba(145, 29, 236, 0.2)",

        "theme-dark-bg": "#1A1A1A",
        "theme-dark-foreground": "#F5EAFF",
        "theme-dark-card": "#2A2A2A",
        "theme-dark-primary": "#911DEC",
        "theme-dark-secondary": "#2A2A2A",
        "theme-dark-border": "rgba(245, 234, 255, 0.1)",

        destructive: "#FA0C00",
        warning: "#FECA13",
        success: "#28DE25",
        info: "#04B4FC",
      },
    },
  },
  plugins: [],
};
