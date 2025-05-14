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
      dark: "#0A0F2A",       // Azul negro profundo, como un cielo estelar
      light: "#F8FAFC",      // Blanco plateado, para textos o fondos claros
      accent: "#FF2079",     // Rosa neón, vibrante para gaming y cosmos
      accentDark: "#00DDEB", // Cian neón, futurista para modo oscuro
      gray: "#6B7280",       // Gris azulado, para textos secundarios o fondos sutiles
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
