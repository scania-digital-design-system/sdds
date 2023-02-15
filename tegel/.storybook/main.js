require('dotenv').config();

let addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  'storybook-dark-mode',
  // '@storybook/addon-interactions',
  '@storybook/addon-notes/register',
];

if (process.env.STORYBOOK_ENV === 'development') {
  addons = [
    ...addons,
    'storybook-dark-mode',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    'addon-screen-reader',
  ];
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: addons,
  framework: '@storybook/html',
  staticDirs: ['../dist', '../public'],
};
