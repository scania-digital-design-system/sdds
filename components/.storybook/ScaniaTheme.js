import { create } from '@storybook/theming';
import ScaniaLogotype from './assets/svg/ScaniaLogotype.svg';

export default create({
  base: 'light',
  brandTitle: 'Scania Digital Design System',
  /* Commented out default is to reload main page of Storybook */
  //brandUrl: 'https://example.com',
  brandImage: ScaniaLogotype,
  brandTarget: '_self',
});
