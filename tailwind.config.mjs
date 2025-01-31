/** @type {import('tailwindcss').Config} */
export default {
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
        lightGrey:"rgba(255, 255, 255, 0.08);",
        "theme-dark" : "#06080B"
      },
      fontFamily:{

        geist: "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        "dm-sans": "var(--font-dm-sans)",
        "dm-mono": "var(--font-dm-sans-mono)",
        poppins: "var(--font-poppins)",
      }
    },
  },
  plugins: [],
};
