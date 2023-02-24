import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Patterns/Navigation',
  parameters: {
    notes: {
      Readme: readme,
    },
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    siteName: {
      name: 'Site name',
      description: 'Set a custom title for the header',
      type: 'string',
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
  <sdds-header>
    <sdds-header-title>
      Example: default
    </sdds-header-title>

    <sdds-header-launcher slot="end">
      <sdds-header-launcher-list-title>Cool apps</sdds-header-launcher-list-title>
      <sdds-header-launcher-list>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
      </sdds-header-launcher-list>
      <sdds-header-launcher-list-title>Lame apps</sdds-header-launcher-list-title>
      <sdds-header-launcher-list>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
      </sdds-header-launcher-list>
    </sdds-header-launcher>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header>
  
  <main class="sdds-u-w-100 sdds-u-p3" style="box-sizing: border-box;">
    <p>If the header only contains a title, launcher, and logo, no side menu is needed.</p>
  </main>
  `,
  );

export const Basic = Template.bind({});
