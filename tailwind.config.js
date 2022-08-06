module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", "sans", "sans-serif", "monospace"],
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        18: "4.5rem",
        22: "5rem",
      },
      transitionProperty: {
        width: "width",
        height: "height",
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
        transitionDuration: {
          0: "0ms",
          2000: "2000ms",
        },
      },
    },
  },
  plugins: [],
};
