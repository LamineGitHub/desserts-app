/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#C73B0F",
        },
        rose: {
          50: "#FCF8F6",
          100: "#F5EEEC",
          300: "#CAAFA7",
          400: "#ADA885",
          500: "#87635A",
          900: "#260F08",
        },
      },
      fontFamily: {
        "red-hat": ["Red Hat Text"],
      },
      fontSize: {
        "heading-xl": ["2.5rem", { lineHeight: "120%" }],
        "heading-lg": ["1.5rem", { lineHeight: "125%" }],
        "body-base": ["1rem", { lineHeight: "150%" }],
        "body-sm": ["0.875rem", { lineHeight: "150%" }],
      },
      screens: {
        "tablet": "768px",
        "desktop": "1440px",
      },
      plugins: [],
    },
  },
}

