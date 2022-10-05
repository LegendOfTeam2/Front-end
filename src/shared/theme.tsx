const calcRem : any = (size : any) => `${size / 16}rem`;

const fontSizes : any = {
  xs: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(28),
  titleSize: calcRem(30),
};

const lineHeight : any = {
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

const fontWeight : any = {
  Regular: 400,
  Medium: 600,
  Bold: 800,
};

const interval : any = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval : any = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes : any = {
  desktopL: "1920px",
};

const colors : any = {
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
};

const device : any = {
  desktopL: `only screen and (max-width: ${deviceSizes.desktopL})`,
};

const theme : any = {
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
