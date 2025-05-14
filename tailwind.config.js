/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: "#1A202C",
        light: "#f5f5f5",
        accent: "#ff2400",
        accentDark: "#00aefe",
        gray: "#222222",
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform:"translateX(100%)"},
          "100%": {transform:"translateX(-100%)"},
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px",
        // @media (min-width: 480px){...}
      }
    },
  },
   plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ], 
};
