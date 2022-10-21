import React from 'react';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/addon-docs';
import { defineCustomElements } from '../loader';
import { useDarkMode } from 'storybook-dark-mode';

// https://github.com/storybookjs/storybook/issues/6364
// - Look for: sarangk-hotstar commented on 23 Jun 2021
// - Look for: Cochonours commented on 14 May
// Test below one in Netlify/Amplify build
import '../www/build/tegel.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
    // https://storybook.js.org/addons/storybook-dark-mode#:~:text=%5D%0A%7D%3B-,Configuration,-Configure%20the%20dark
  },
  docs: {
    // Fix for dark mode not working on docs tab
    container: props => {
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = isDark ? themes.dark : themes.light;

      return React.createElement(DocsContainer, props);
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    // light: { appBg: 'red' },
    darkClass: 'sdds-theme-dark',
    lightClass: 'sdds-theme-light',
    stylePreview: true,
  },
};

defineCustomElements();
