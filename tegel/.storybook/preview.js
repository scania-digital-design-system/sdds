import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { defineCustomElements } from '../loader';
import { useDarkMode } from 'storybook-dark-mode';
import { lightTheme, darkTheme } from './themes';

// https://github.com/storybookjs/storybook/issues/6364
// - Look for: sarangk-hotstar commented on 23 Jun 2021
// - Look for: Cochonours commented on 14 May
// Test below one in Netlify/Amplify build
import '../www/build/tegel.css';

const customViewports = {
  xs: {
    name: 'grid-xs',
    styles: {
      width: '607px',
      height: '963px',
    },
  },
  sm: {
    name: 'grid-sm',
    styles: {
      width: '608px',
      height: '963px',
    },
  },
  md: {
    name: 'grid-md',
    styles: {
      width: '800px',
      height: '801px',
    },
  },
  lg: {
    name: 'grid-lg',
    styles: {
      width: '992px',
      height: '1200px',
    },
  },
  xlg: {
    name: 'grid-xlg',
    styles: {
      width: '1184px',
      height: '1400px',
    },
  },
  xxlg: {
    name: 'grid-xxlg',
    styles: {
      width: '1367px',
      height: '1600px',
    },
  },
  max: {
    name: 'grid-max',
    styles: {
      width: '1584px',
      height: '1680px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'alpha',
  },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
    // https://storybook.js.org/addons/storybook-dark-mode#:~:text=%5D%0A%7D%3B-,Configuration,-Configure%20the%20dark
  },
  viewport: { viewports: customViewports },
  docs: {
    // Fix for dark mode not working on docs tab
    container: props => {
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = isDark ? darkTheme : lightTheme;

      return React.createElement(DocsContainer, props);
    },
    source: {
      state: 'open',
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: darkTheme,
    // Override the default light theme
    light: lightTheme,
    darkClass: 'sdds-theme-dark',
    lightClass: 'sdds-theme-light',
    stylePreview: true,
  },
  backgrounds: {
    values: [
      {
        name: 'grey-50',
        value: '#F9FAFB',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'grey-900',
        value: '#1d2229',
      },
      {
        name: 'grey-958',
        value: '#0d0f13',
      },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Intro', 'Foundations', 'Utilities', 'Components', 'Patterns'],
    },
  },
  layout: 'padded',
};

defineCustomElements();
