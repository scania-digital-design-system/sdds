import {setCustomElements} from '@storybook/web-components';
import customElements from '../dist/collection/custom-elements.json';

import { addTheme, defineCustomElements } from '../dist/collection/index';
import { theme } from '@scania/theme-light';

const customViewports = {
  Small: {
    name: 'Small',
    styles: {
      width: '320px',
      height: '963px',
    },
  },
  Medium: {
    name: 'Medium',
    styles: {
      width: '627px',
      height: '801px',
    },
  },
  Large: {
    name: 'Large',
    styles: {
      width: '1056px',
      height: '801px',
    },
  },
  XLarge: {
    name: 'XLarge',
    styles: {
      width: '1312px',
      height: '801px',
    },
  },
  XXLarge: {
    name: 'XXLarge',
    styles: {
      width: '1584px',
      height: '801px',
    },
  },
};

//Storybook settings
export const parameters = {
  controls: { expanded: true },
  viewport: { viewports: customViewports },
  grid: { cellSize: 4 }, //TODO: correct gridcellsize
  backgrounds: {
    default: 'light #F6F6F7',
    values: [
      {
        name: 'light #F6F6F7',
        value: '#F6F6F7',
      },
      {
        name: 'white #FFFFF',
        value: '#FFFFF',
      },
      {
        name: 'dark #3A3B3F',
        value: '#3A3B3F',
      },
    ],
  },
}


setCustomElements(customElements);

defineCustomElements();
addTheme(theme);
