/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: (theme = {
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        body: ["iransans"],
      },
      content: {},
    },
    screens: {
      sm: "550px",
      md: "763px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
