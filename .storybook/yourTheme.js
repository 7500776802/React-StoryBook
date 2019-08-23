import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "pink",
  colorSecondary: "green",

  // UI
  appBg: "white",
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  fontSize:"40",
  

  // Text colors
  textColor: "black",
 
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: 'linear-gradient(to right bottom ,#F20C6B,#FFA100)',

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "white",
  inputBorderRadius: 4,

});