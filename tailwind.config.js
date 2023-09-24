/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(images/bg-header-mobile.svg)",
        desktop: "url(images/bg-header-desktop.svg)",
      },
      borderWidth: {
        5: "5px",
        6: "6px",
      },
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan-bg": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-ft": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      fontSize: {
        body: "15px",
      },
      screens: {
        "2xl": "1440px",
      },
      spacing: {
        mobile: "11rem",
        "mobile-logo": "50px",
        "desktop-logo": "75px",
      },
    },
  },
  plugins: [],
};
