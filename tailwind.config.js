/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flash: {
          '0%, 100%': { color: 'red' },
          '50%': { color: 'white' },
        },
      },
      animation: {
        flash: 'flash 1s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        elegant: {
          primary: "#ff0000",
          secondary: "#000000",
          accent: "#ffffff",
          neutral: "#333333",
          "base-100": "#000000",
        },
      },
    ],
  },
};
