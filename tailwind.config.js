module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        white: "var(--white)",
        fieldblack: "var(--fieldblack)",
        red: "var(--red)",
        graylight: "var(--graylight)",
        darkblack: "var(--darkblack)",
        yellow: "var(--yellow)",
        graydark: "var(--graydark)",
        green: "var(--green)",
        orange: "var(--orange)",
        gray: "var(--gray)",
        orangeop: "rgba(242, 153, 74, 0.2)",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
