/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {},
      backgroundImage: {
        primary:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(82,81,93,1) 0%, rgba(71,74,83,1) 100%)",
      },
    },
  },
  plugins: [],
};
