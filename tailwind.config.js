/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        asidePadding: "48px",
      },
      colors: {
        light: {
          bg: "#f8fafc",
          bgColor: "#ffffff",
          textColor: "#0f172a",
          subTextColor: "#64748b",
          divideColor: "#e2e8f0",
        },
        dark: {
          bg: "#0f172a",
          bgColor: "#1e293b",
          textColor: "#ffffff",
          subTextColor: "#64748b",
          divideColor: "#334155",
        },
      },
    },
  },
  plugins: [],
}

