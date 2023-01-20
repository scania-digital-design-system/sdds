import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A31546&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A31546&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
  },
};

// Why role="link" on a disabled link: https://www.scottohara.me/blog/2021/05/28/disabled-links.html
const Template = ({ modeVariant }) =>
  formatHtmlPreview(`
    <sdds-navigation-tabs  ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"`: ''}>
      <a href="#" class="sdds-navigation-tabs-tab-active">Active tab</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a role="link" aria-disabled="true" tabindex="-1" class="sdds-navigation-tabs-tab-disabled">Disabled tab</a>
    </sdds-navigation-tabs>
    `);

export const NavigationTabs = Template.bind({});
NavigationTabs.args = {};
