import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F9E21B",
  primaryBright: "#FCB426",
  primaryDark: "#FFFFFF",
  secondary: "#FCB426",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#FCB426",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#273b4f",
  textDisabled: "#BDC2C4",
  textSubtle: "#273b4f",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FCB426",
  background: "#333335",
  backgroundDisabled: "rgba(51, 51, 53, 0.8);",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eaeaea",
  primaryDark: "#eaeaea",
  tertiary: "#DE5CA2",
  text: "#eaeaea",
  textDisabled: "#BDC2C4",
  textSubtle: "#eaeaea",
  borderColor: "#524B63",
  card: "#333335",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
