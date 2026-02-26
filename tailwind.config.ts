import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       sans: ["var(--font-geist-sans)"],
      },
      fontSize: {
        "display-3xl": ["60px", { lineHeight: "72px" }],
        "display-2xl": ["48px", { lineHeight: "60px", letterSpacing: "-0.02em" }],
        "display-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em" }],
        "display-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em" }],
        "display-md": ["32px", { lineHeight: "40px" }],
        "display-sm": ["28px", { lineHeight: "36px" }],
        "display-xs": ["24px", { lineHeight: "34px" }],

        xl: ["20px", { lineHeight: "34px" }],
        lg: ["18px", { lineHeight: "32px" }],
        md: ["16px", { lineHeight: "30px" }],
        sm: ["14px", { lineHeight: "28px" }],
        xs: ["12px", { lineHeight: "24px" }],
      },
      borderRadius: {
        none: "var(--radius-none)",
        xxs: "var(--radius-xxs)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        full: "var(--radius-full)",
      },
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",

        neutral: {
          25: "var(--neutral-25)",
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        brand: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          500: "var(--primary-500)",
        },
        danger: "var(--accent-red)",
        ok: "var(--accent-green)",
        caution: "var(--accent-yellow)",
      },
    },
  },
  plugins: [],
}

export default config