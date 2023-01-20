import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/HeaderV2',
  parameters: {
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
  <sdds-header-v2>
    <sdds-header-title>
      Simple header
    </sdds-header-title>

    <sdds-header-launcher-button slot="end"></sdds-header-launcher-button>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header-v2>
  
  <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
    <p>If the header only contains a title, launcher, and logo, no side menu is needed.</p>
  </main>
  `,
  );

export const Default = Template.bind({});
