/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1534px",
      },
    },
    screens: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
      "2xl": { max: "1535px" },
    },
    extend: {
      colors: {
        general: "#276C76",
        header: "#C8E677",
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.lime.50'), 0 0  30px theme('colors.lime.200')",
      },
      fontFamily: {
        berkshire: ['"Berkshire Swash"', "serif"],
        poppins: ["Poppins", "sans-serif"], // Add the Berkshire Swash font
      },
    },
  },
  plugins: [],
};
