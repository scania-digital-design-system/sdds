import { themes } from '@storybook/theming';

// Below are the default values that can be found with console.log(themes.dark).
// You can override them in the object "darkTheme" further down.
//
// "base": "dark",
// "colorPrimary": "#FF4785",
// "colorSecondary": "#1EA7FD",
// "appBg": "#2f2f2f",
// "appContentBg": "#333333",
// "appBorderColor": "rgba(255,255,255,.1)",
// "appBorderRadius": 4,
// "fontBase": "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
// "fontCode": "ui-monospace, Menlo, Monaco, \"Roboto Mono\", \"Oxygen Mono\", \"Ubuntu Monospace\", \"Source Code Pro\", \"Droid Sans Mono\", \"Courier New\", monospace",
// "textColor": "#FFFFFF",
// "textInverseColor": "#333333",
// "textMutedColor": "#999999",
// "barTextColor": "#999999",
// "barSelectedColor": "#1EA7FD",
// "barBg": "#333333",
// "inputBg": "#3f3f3f",
// "inputBorder": "rgba(0,0,0,.3)",
// "inputTextColor": "#FFFFFF",
// "inputBorderRadius": 4

export const darkTheme = {
  ...themes.dark,
  appContentBg: '#1d2229',
  barBg: '#1d2229',
  textInverseColor: '#1d2229',
};

export const lightTheme = themes.light;
