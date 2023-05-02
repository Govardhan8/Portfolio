/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "primary-light-green": "#49ec36",
      },
      backgroundImage: {
        primary:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,60,62,1) 0%, rgba(0,0,0,1) 0%, rgba(75,72,72,0.7959558823529411) 100%)",
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  plugins: [],
};
