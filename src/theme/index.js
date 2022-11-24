import "@fontsource/roboto"; // Defaults to weight 400.


export const base = {
  breakpoints: ["768px"],
  space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px", "128px", "256px"],
  sizes: {
    body: "800px",
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Roboto, Inter, system-ui, sans-serif",
  },
  fontSizes: [
    "1rem",
    "1.2rem",
    "2rem",
    "2.8rem",
    "3.4rem",
    "4rem",
    "5.1rem",
    "6rem",
    "6.8rem",
    "8.2rem",
  ],
  fontWeights: {
    xtra: 900,
    heading: 700,
    mid: 600,
    body: 400,
  },
  lineHeights: {
    heading: 1.2,
    body: 1.4,
  },
  radii: ["2px", "4px", "8px"],
};

export const light = {
  primary: "#4851f4",
  background: "#ffffff",
  nav: "#f8f8f8",
  border: "#deebf1",
  text: "#202224",
};

export const dark = {
  primary: "#4851f4",
  background: "#1f2023",
  nav: "#27282b",
  border: "#303236",
  text: "#f8f8f8",
};
