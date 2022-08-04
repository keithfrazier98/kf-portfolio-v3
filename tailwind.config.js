module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", "sans", "sans-serif", "monospace"],
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
