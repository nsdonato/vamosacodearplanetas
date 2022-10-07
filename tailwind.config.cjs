/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,jsx,js,ts}"],
  safelist: [
    {
      pattern: /(bg|border)-(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/,
    },
  ],
  theme: {
    letterSpacing: {
      1.5: "-1.5px",
      1.05: "-1.05px",
      0.9: "-0.9px",
      0.75: "-0.75px",
      0: "0px",
      1: "1px",
      0.73: "0.73px",
      1.36: "1.36px",
      1.93: "1.93px",
      2.57: "2.57px",
    },
    lineHeight: {
      normal: "normal",
      16: "16px",
      22: "22px",
      25: "25px",
    },
    fontSize: {
      8: "8px",
      9: "9px",
      11: "11px",
      12: "12px",
      14: "14px",
      15: "15px",
      20: "20px",
      24: "24px",
      28: "28px",
      40: "40px",
      48: "48px",
      80: "80px",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      white: "#ffffff",
      "gray-light": "#838391",
      darkBlue: "#070724",
      gray: "#38384f",
      darkGray: "#D9D9D9",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6F2ED6",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1EC2A4",
      neptune: "#2D68F0",
    },
    fontFamily: {
      antonio: ["Antonio", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        stars: "url('/background-stars.svg')",
      },
      screens: {
        sm: "375px",
        md: "768px",
        xl: "1440px",
      },
    },
  },
};
