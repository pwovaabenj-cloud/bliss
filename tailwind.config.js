/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#36B5FF", // голубой from logo
          accent: "#FFC42E",  // яркий желтый-оранжевый
          dark: "#0A0F1F",
        }
      },
      fontFamily: {
        display: ["system-ui", "Segoe UI", "Inter", "Arial", "sans-serif"],
        body: ["system-ui", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(54,181,255,0.35)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(60% 60% at 70% 10%, rgba(54,181,255,0.15), transparent 70%), radial-gradient(50% 50% at 20% 80%, rgba(255,196,46,0.12), transparent 70%)"
      }
    },
  },
  plugins: [],
}
