import {setCustomElements, addDecorator} from '@storybook/web-components';
import {withThemes } from 'storybook-addon-themes/html'
import customElements from '../dist/collection/custom-elements.json';

addDecorator(withThemes)

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
  Infinity: {
    name: '1584px >',
    styles: {
      width: '1980px',
      height: '1680px',
    },
  },
};

const customBGvalues = [
    {
      name: 'light',
      value: '#F6F6F7',
    },
    {
      name: 'white',
      value: '#FFFFFF',
    },
    // {
    //   name: 'dark',
    //   value: '#3A3B3F',
    // },
]

//Storybook settings
export const parameters = {
  // controls: { expanded: true }, // disabled this to hide description and default in control
  viewport: { viewports: customViewports },
  themes: {
    default: 'on-grey',
    list: [
      { name: 'on-white', class: 'sdds-on-white-bg', color: '#FFFFFF' },
      { name: 'on-grey', class: 'sdds-on-grey-bg', color: '#F6F6F7' },
      // { name: 'on-dark', class: 'sdds-on-grey', color: '#3A3B3F' }
    ],
  },
  backgrounds: {
    grid: { cellSize: 4 }, //TODO: correct gridcellsize
    default: 'light',
    values: customBGvalues,
  },
}


setCustomElements(customElements);

defineCustomElements();
addTheme(theme);
