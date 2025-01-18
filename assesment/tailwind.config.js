/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: {
          DEFAULT: "#EFEFEF",
          primary: "#505050",
          secondary: "#F5F5F5",
          dark: "#303030",
          normal: "#707070",
        },
        primary: {
          DEFAULT: "#2160FD",
          light: "#D8E4FF",
          dark: "#0D4CE1",
        },
        disabled: {
          DEFAULT: "#FAFAFA",
        },
        pink: {
          DEFAULT: "#EE45BC",
          light: "#F670C71A",
        },
        sea: {
          DEFAULT: "#A6F0FC",
          dark: "#0C8AB2",
          light: "#06AED4",
        },
      },
    },
  },
  plugins: [],
};
