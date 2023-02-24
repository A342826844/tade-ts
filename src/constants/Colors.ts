const tintColorLight = "#2563EB";
const tintColorDark = "#32BDCF";
const priceColor = "#F1BE76";
const primary = "#3D6AFB";
const subText = "#94A5C9";
const likeColor = "#f98364";
const redColor = "#f98364";

const Colors = {
  light: {
    text: "#000",
    outline: '#fff',
    background: "#f4f8f9",
    backgroundCard: "#fff",
    tabbarBackgroundColor: "#fefefe",
    tint: tintColorLight,
    up: '#12B59A',
    down: '#F25E4F',
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    inputBackground: "#fff",
    placeholderTextColor: subText,
    buttonTextColor: tintColorDark,
    disabled: "#32BDCF",
    subText,
    heading: "#252525",
    border: "#B3B3B3",
    subtleBtnBg: "#EDF3FF",
    subtleBtnColor: "#0878D2",
    priceColor,
    primary,
    likeColor,
    redColor,
  },
  dark: {
    text: "#fff",
    outline: '#000',
    background: "#12182b",
    backgroundCard: "#2D384B",
    tabbarBackgroundColor: "#eee",
    tint: tintColorDark,
    up: '#12B59A',
    down: '#F25E4F',
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    inputBackground: "#2D384B",
    placeholderTextColor: subText,
    buttonTextColor: tintColorDark,
    disabled: "#32BDCF",
    subText,
    heading: "#fff",
    border: "#B3B3B3",
    subtleBtnBg: "#343C4E",
    subtleBtnColor: "#0878D2",
    priceColor,
    primary,
    likeColor,
    redColor,
  },
};

export type ColorsKey = keyof typeof Colors.dark;

export const gradientColor = {
  light: {
    primary: {
      colors: ["#F1A0FF", "#34C5DF", "#6EFBBA"],
      start: [0, 0],
      end: [1, 0],
    },
    linearGradient0: {
      colors: ["#0A0E16", "#2D384B"],
      end: [0, 0],
      start: [0, 1],
    },
    linearGradient1: {
      colors: ["#151B27", "#2D384B"],
      start: [0, 0],
      end: [0, 1],
    },
    linearGradient2: {
      colors: ["#808789", "#FFFFFF", "#808789"],
      start: [0, 0],
      end: [0, 1],
    },
  },
  dark: {
    primary: {
      colors: ["#F1A0FF", "#34C5DF", "#6EFBBA"],
      start: [0, 0],
      end: [1, 0],
    },
    linearGradient0: {
      colors: ["#0A0E16", "#2D384B"],
      end: [0, 0],
      start: [0, 1],
    },
    linearGradient1: {
      colors: ["#151B27", "#2D384B"],
      start: [0, 0],
      end: [0, 1],
    },
    linearGradient2: {
      colors: ["#808789", "#FFFFFF", "#808789"],
      start: [0, 0],
      end: [0, 1],
    },
  },
};

export default Colors;
