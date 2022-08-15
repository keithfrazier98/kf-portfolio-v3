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
      boxShadow: {
        solid: "2px 2px 0px 0px black",
        "solid-w": "2px 2px 0px 0px white",
        "0-click": "-2px -2px 0px 0px black",
        "0-click-w": "-2px -2px 0px 0px white",

      },
      backgroundImage:{
        pic:"url('/src/images/keith.jpg')"
      }
    },
  },
  plugins: [],
};
