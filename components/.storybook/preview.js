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
      width: '672px',
      height: '801px',
    },
  },
  Large: {
    name: 'Large',
    styles: {
      width: '1056px',
      height: '1200px',
    },
  },
  XLarge: {
    name: 'XLarge',
    styles: {
      width: '1312px',
      height: '1400px',
    },
  },
  XXLarge: {
    name: 'XXLarge',
    styles: {
      width: '1584px',
      height: '1600px',
    },
  },
};

//Storybook settings
export const parameters = {
  // controls: { expanded: true }, // disabled this to hide description and default in control
  viewport: { viewports: customViewports },
  backgrounds: {
    grid: { cellSize: 4 }, //TODO: correct gridcellsize
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
