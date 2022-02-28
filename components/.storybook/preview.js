import { setCustomElements } from '@storybook/web-components';
import customElements from '../dist/collection/custom-elements.json';

import { addTheme, defineCustomElements } from '../dist/collection/index';
import { theme } from '@scania/theme-light';

const customViewports = {
  xs: {
    name: 'xs',
    styles: {
      width: '607px',
      height: '963px',
    },
  },
  sm: {
    name: 'sm',
    styles: {
      width: '608px',
      height: '963px',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '800px',
      height: '801px',
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: '992px',
      height: '1200px',
    },
  },
  xlg: {
    name: 'xlg',
    styles: {
      width: '1184px',
      height: '1400px',
    },
  },
  xxlg: {
    name: 'xxlg',
    styles: {
      width: '1367px',
      height: '1600px',
    },
  },
  max: {
    name: 'max',
    styles: {
      width: '1584px',
      height: '1680px',
    },
  },
  infinity: {
    name: '> ',
    styles: {
      width: '1980px',
      height: '1680px',
    },
  },
};

const customBGvalues = [
  {
    name: 'grey',
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
];

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
    default: 'grey',
    values: customBGvalues,
  },
  layout: 'padded', // Adds extra padding around the component
  chromatic: { disableSnapshot: true }, // disables snapshotting on a global level
};

setCustomElements(customElements);
defineCustomElements();
addTheme(theme);
