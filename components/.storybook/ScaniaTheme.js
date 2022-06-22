import { create } from '@storybook/theming';
import ScaniaLogotype from './assets/svg/ScaniaLogotype.svg';

export default create({
  base: 'light',
  brandTitle: 'Scania Digital Design System',
  /* Commented out default is to reload main page of Storybook */
  //brandUrl: 'https://example.com',
  brandImage: ScaniaLogotype,
  brandTarget: '_self',

  // colorPrimary: '#ff2340',
  // Commented out as its usage is unclear

  colorSecondary: '#2b70d3',

  // UI
  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appBorderColor: '#edeff3',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica Neue", "Arial", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#0d0f13',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#5f6d80',
  barSelectedColor: '#2b70d3',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});
