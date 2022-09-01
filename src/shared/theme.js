const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(28),
  titleSize: calcRem(50),
};

const lineHeight = {
  xxs: "18px",
  xs:"20px",
  sm: "22px",
  base: "24px",
  lg: "28px",
  xl: "30px",
  xxl: "32px",
  xxxl: "34px",
  xxxxl: "40px",
};

const fontWeight = {
  Regular: 400,
  Medium: 600,
  Bold: 800,
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  lineHeight,
  colors,
  deviceSizes,
  device,
  interval,
  verticalInterval,
  fontWeight,
  
};

export default theme;
