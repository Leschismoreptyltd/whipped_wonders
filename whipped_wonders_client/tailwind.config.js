const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          light: '#795548', // Lighter chocolate brown
          DEFAULT: '#5D4037',
        },
        beige: '#E6D9C3',
        pink: '#E57399',
        green: '#43A047',
        cream: '#FAF3E0',
        navbarBg: "#FBFAF8",
        clockBg: "#f7f7f7",
        clockTextColor: "#de4848"
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        danfo: ["Danfo", "sans-serif"],
        alfaSlabOne: ["Alfa Slab One", "sans-serif"],
        dancingScript: ["Dancing Script", "sans-serif"],
        reenieBeanie: ["Reenie Beanie", "sans-serif"],
        mrsSaintDelafield: ["Mrs Saint Delafield", "sans-serif"],
        specialElite:["Special Elite", "sans-serif"],
        notoSerifJapanese:["Noto Serif JP", "sans-serif"],
        logoFont: ["Great Vibes","sans-serif"]
        // Add more custom font families as needed
      }
    },
    screens: {
      
      mobile: {"max": "639px"},
      tablet: {"min":"640px", "max":"1023px"},
      desktop: {"min": "1080px", "max":"1399px"},
      highRes: {"min":"1400px"},
    },
  },
  plugins: [],
}
)

