import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "2/1": "2fr 1fr",
        "14": "repeat(14, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(130px, 1fr))",
        "auto-fill-xs": "repeat(auto-fill, minmax(150px, 1fr))",
        "auto-fill-md": "repeat(auto-fill, minmax(185px, 1fr))",
      },
      backgroundImage: {
        video: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.72%, rgba(0, 0, 0, 0.75) 104.14%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.26) 22.41%, rgba(0, 0, 0, 0.00) 34.48%);`,
        videoHover:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);",
      },
      screens: {
        xs: "481px",
        md: "769px",
        desktop: "1441px",
      },
      fontSize: {
        leading: ["2rem", "2.625rem"],
      },
      width: {
        content: "1232px",
        page: "800px",
      },
      colors: {
        main: "hsl(var(--main))",
        turqoise: "hsl(var(--main))",
        halfWhite: "rgba(255, 255, 255, 0.5)",
        typography: "#576172",
        description: "#7D8CA3",
        incubation: "#101927",
        darkGray: "#b6b6bf",
        active: "#283344",
        bgaActive: "#00d5bf",
        oscarActive: "#B5964D",
        oscarBlack: "rgb(16,25,39)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "move-dot1": {
          "0%": {
            top: "0",
            opacity: "1",
          },
          "4%": {
            top: "calc(100% - 2px)",
            opacity: "1",
          },
          "5%": {
            opacity: "0",
          },
          "99%": {
            top: "0",
            opacity: "0",
          },
          "100%": {
            top: "0",
            opacity: "1",
          },
        },
        "move-dot1-sm": {
          "0%": {
            top: "0",
            opacity: "1",
          },
          "6%": {
            top: "calc(100% - 2px)",
            opacity: "1",
          },
          "7%": {
            opacity: "0",
          },
          "99%": {
            top: "0",
            opacity: "0",
          },
          "100%": {
            top: "0",
            opacity: "1",
          },
        },
        "move-dot2": {
          "0%": {
            opacity: "0",
          },
          "42%": {
            opacity: "0",
          },
          "43%": {
            top: "0",
            opacity: "1",
          },
          "47%": {
            top: "calc(100% - 2px)",
            opacity: "1",
          },
          "48%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot2-sm": {
          "0%": {
            opacity: "0",
          },
          "51%": {
            opacity: "0",
          },
          "52%": {
            top: "0",
            opacity: "1",
          },
          "58%": {
            top: "calc(100% - 2px)",
            opacity: "1",
          },
          "59%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-rect1": {
          "0%": {
            opacity: "0",
          },
          "4%": {
            opacity: "0",
          },
          "5%": {
            top: "-3px",
            left: "-3px",
            opacity: "1",
          },
          "20%": {
            top: "-3px",
            left: "calc(100% - 2px)",
            opacity: "1",
          },
          "27%": {
            top: "calc(100% - 2px)",
            left: "calc(100% - 2px)",
            opacity: "1",
          },
          "42%": {
            top: "calc(100% - 2px)",
            left: "-3px",
            opacity: "1",
          },
          "43%": {
            opacity: "0",
            top: "calc(100% - 2px)",
            left: "-3px",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-rect1-sm": {
          "0%": {
            opacity: "0",
          },
          "7%": {
            opacity: "0",
          },
          "8%": {
            top: "-3px",
            left: "-3px",
            opacity: "1",
          },
          "25%": {
            top: "-3px",
            left: "calc(100% - 2px)",
            opacity: "1",
          },
          "34%": {
            top: "calc(100% - 2px)",
            left: "calc(100% - 2px)",
            opacity: "1",
          },
          "51%": {
            top: "calc(100% - 2px)",
            left: "-3px",
            opacity: "1",
          },
          "52%": {
            opacity: "0",
            top: "calc(100% - 2px)",
            left: "-3px",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-left": {
          "0%": {
            opacity: "0",
          },
          "53%": {
            opacity: "0",
          },
          "54%": {
            opacity: "1",
            top: "-32px",
            left: "300px",
          },
          "64%": {
            opacity: "1",
            top: "-32px",
            left: "-3px",
          },
          "69%": {
            opacity: "1",
            top: "100%",
            left: "-3px",
          },
          "70%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-left-sm": {
          "0%": {
            opacity: "0",
          },
          "67%": {
            opacity: "0",
          },
          "68%": {
            opacity: "1",
            top: "-2px",
          },
          "74%": {
            opacity: "1",
            top: "calc(100% - 2px)",
          },
          "75%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-middle": {
          "0%": {
            opacity: "0",
          },
          "71%": {
            opacity: "0",
          },
          "72%": {
            opacity: "1",
            top: "-2px",
          },
          "76%": {
            opacity: "1",
            top: "calc(100% - 2px)",
          },
          "77%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-middle-sm": {
          "0%": {
            opacity: "0",
          },
          "76%": {
            opacity: "0",
          },
          "77%": {
            opacity: "1",
            top: "-2px",
          },
          "83%": {
            opacity: "1",
            top: "calc(100% - 2px)",
          },
          "84%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-right": {
          "0%": {
            opacity: "0",
          },
          "78%": {
            opacity: "0",
          },
          "79%": {
            opacity: "1",
            top: "-32px",
            left: "-300px",
          },
          "89%": {
            opacity: "1",
            top: "-31px",
            left: "-3px",
          },
          "94%": {
            opacity: "1",
            top: "100%",
            left: "-3px",
          },
          "95%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-right-sm": {
          "0%": {
            opacity: "0",
          },
          "85%": {
            opacity: "0",
          },
          "86%": {
            opacity: "1",
            top: "-2px",
          },
          "92%": {
            opacity: "1",
            top: "calc(100% - 2px)",
          },
          "93%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "blinker-image": {
          "0%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "48%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "49%": {
            "border-color": "#00d5bf",
            "box-shadow": "0 0 10px #00d5bf",
          },
          "51%": {
            "border-color": "#00d5bf",
            "box-shadow": "0 0 10px #00d5bf",
          },
          "52%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "100%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
        },
        "blinker-image-sm": {
          "0%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "60%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "61%": {
            "border-color": "#00d5bf",
            "box-shadow": "0 0 10px #00d5bf",
          },
          "65%": {
            "border-color": "#00d5bf",
            "box-shadow": "0 0 10px #00d5bf",
          },
          "66%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "100%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
        },
        "blinker-committee1": {
          "0%": {
            "box-shadow": "none",
          },
          "53%": {
            "box-shadow": "none",
          },
          "54%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "69%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "70%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee1-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "67%": {
            "box-shadow": "none",
          },
          "68%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "74%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "75%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee2": {
          "0%": {
            "box-shadow": "none",
          },
          "71%": {
            "box-shadow": "none",
          },
          "72%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "76%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "77%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee2-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "76%": {
            "box-shadow": "none",
          },
          "77%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "83%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "84%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee3": {
          "0%": {
            "box-shadow": "none",
          },
          "78%": {
            "box-shadow": "none",
          },
          "79%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "94%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "95%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee3-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "85%": {
            "box-shadow": "none",
          },
          "86%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "92%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "93%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee4": {
          "0%": {
            "box-shadow": "none",
          },
          "20%": {
            "box-shadow": "none",
          },
          "21%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "26%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "27%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        "blinker-committee4-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "25%": {
            "box-shadow": "none",
          },
          "26%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "33%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "34%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          },
        },
        floatY: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.8",
          },
          "30%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "0.1",
          },
          "70%": {
            opacity: "0.8",
          },
        },
        "fade-out-left": {
          from: { left: "10%" },
          to: { left: "-50%" },
        },
        "fade-out-right": {
          from: { right: "10%" },
          to: { right: "-50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "move-dot1": "move-dot1 26s linear infinite",
        "move-dot1-sm": "move-dot1-sm 20s linear infinite",
        "move-dot2": "move-dot2 26s linear infinite",
        "move-dot2-sm": "move-dot2-sm 20s linear infinite",
        "move-dot-rect1": "move-dot-rect1 26s linear infinite",
        "move-dot-rect1-sm": "move-dot-rect1-sm 20s linear infinite",
        "move-dot-rect-left": "move-dot-left 26s linear infinite",
        "move-dot-rect-left-sm": "move-dot-left-sm 20s linear infinite",
        "move-dot-rect-right": "move-dot-right 26s linear infinite",
        "move-dot-rect-right-sm": "move-dot-right-sm 20s linear infinite",
        "move-dot-rect-middle": "move-dot-middle 26s linear infinite",
        "move-dot-rect-middle-sm": "move-dot-middle-sm 20s linear infinite",
        "blinker-image": "blinker-image 26s linear infinite",
        "blinker-image-sm": "blinker-image-sm 20s linear infinite",
        "blinker-committee1": "blinker-committee1 26s linear infinite",
        "blinker-committee1-sm": "blinker-committee1-sm 20s linear infinite",
        "blinker-committee2": "blinker-committee2 26s linear infinite",
        "blinker-committee2-sm": "blinker-committee2-sm 20s linear infinite",
        "blinker-committee3": "blinker-committee3 26s linear infinite",
        "blinker-committee3-sm": "blinker-committee3-sm 20s linear infinite",
        "blinker-committee4": "blinker-committee4 26s linear infinite",
        "blinker-committee4-sm": "blinker-committee4-sm 20s linear infinite",
        floatY: "floatY 3s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "fade-out-left": "fade-out-left 3s ease-in-out both 0.2s",
        "fade-out-right": "fade-out-right 3s ease-in-out both 0.2s",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
