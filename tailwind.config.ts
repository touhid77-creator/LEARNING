import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep ocean blue — primary
        ocean: {
          50: "#eef3f6",
          100: "#d7e3ea",
          200: "#aec6d4",
          300: "#7fa4b8",
          400: "#4f7d97",
          500: "#33607a",
          600: "#254b63",
          700: "#1c3a4d",
          800: "#152c3b",
          900: "#0f2029",
          950: "#0a161d",
        },
        // Warm off-white — base
        pearl: {
          DEFAULT: "#FAF6EF",
          soft: "#F4EEE2",
        },
        // Sand / natural beige
        sand: {
          50: "#FBF7F0",
          100: "#F3EBDA",
          200: "#E7D9BE",
          300: "#D8C39D",
          400: "#C6A97A",
          500: "#B08F5E",
        },
        // Muted green — palm accent
        palm: {
          50: "#EEF1E9",
          100: "#DCE3D1",
          300: "#9FAD87",
          500: "#5C6E4E",
          700: "#3F4D35",
          900: "#2A3323",
        },
        // Warm gold — sparing accent
        gold: {
          300: "#E3C68A",
          500: "#C7A15A",
          700: "#9C7B3E",
        },
        ink: "#1B1B18",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 32, 41, 0.14)",
        soft: "0 2px 20px 0 rgba(15, 32, 41, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
