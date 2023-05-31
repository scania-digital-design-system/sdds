import { addTheme } from '../dist/collection/index';
import { theme } from '@scania/theme-light';

import { defineCustomElements } from '../dist/collection/index';
defineCustomElements();

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
    name: 'White',
    value: '#FFFFFF',
  },
  {
    name: 'Light grey',
    value: '#F9FAFB',
  },
];

//Storybook settings
export const parameters = {
  // controls: { expanded: true }, // disabled this to hide description and default in control
  docs: {
    source: {
      state: 'open',
    },
  },
  viewport: { viewports: customViewports },
  themes: {
    default: 'on-grey',
    list: [
      { name: 'on-white', class: 'sdds-on-white-bg', color: '#FFFFFF' },
      { name: 'on-grey', class: 'sdds-on-grey-bg', color: '#F9FAFB' },
    ],
  },
  backgrounds: {
    grid: { cellSize: 4 }, //TODO: correct gridcellsize
    default: 'Light grey',
    values: customBGvalues,
  },
  layout: 'padded', // Adds extra padding around the component
  chromatic: { disableSnapshot: true }, // disables snapshotting on a global level
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Foundation', 'Utilities', 'Component', 'Patterns', 'Pre-alpha'],
    },
  },
};

addTheme(theme);
