import { create } from '@storybook/theming';
import ScaniaLogotype from './assets/svg/ScaniaLogotype.svg';

export default create({
  base: 'light',
  brandTitle: "Tegel - Scania's Digital Design System",
  /* Commented out default is to reload main page of Storybook */
  //brandUrl: 'https://example.com',
  brandImage: ScaniaLogotype,
  brandTarget: '_self',

  // colorPrimary: '#ff2340',
  // Commented out as its usage is unclear

  colorSecondary: '#2b70d3', // --sdds-blue-400

  // UI

  appBg: '#f9fafb', // --sdds-grey-50
  appContentBg: '#ffffff', // --sdds-white
  appBorderColor: '#edeff3', // --sdds-grey-100
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica Neue", "Arial", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#0d0f13', // --sdds-grey-958
  textInverseColor: 'rgba(255,255,255,0.9)', // storybook default

  // Toolbar default and active colors
  barTextColor: '#5f6d80', // custom made color
  barSelectedColor: '#2b70d3', // --sdds-blue-400
  barBg: '#ffffff', // --sdds-white

  // Form colors
  inputBg: 'white', // storybook default
  inputBorder: 'silver', // storybook default
  inputTextColor: 'black', // storybook default
  inputBorderRadius: 4,
});
