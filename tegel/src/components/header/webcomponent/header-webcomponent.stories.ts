import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Header',
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

const Template = ({ siteName }) =>
  formatHtmlPreview(
    `
  <sdds-header site-name="${siteName}" icon-href="https://www.scania.com">
    <div slot="inline-menu">
      <sdds-header-link>
        Link
      </sdds-header-link>

      <sdds-header-dropdown>
        Dropdown
        <sdds-icon class="dropdown" name="chevron_down" size="16px"> </sdds-icon>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
        <sdds-header-button active slot="child">
          Button
        </sdds-header-button>
        <sdds-header-user 
          img="https://www.svgrepo.com/show/170303/avatar.svg" 
          alt="Alt"
          header="Header"
          subheader="Subeader"
          slot="child"
          >
        </sdds-header-user>
      </sdds-header-dropdown>
      <sdds-header-link>
        Link
      </sdds-header-link>
    </div>

    <div slot="toolbar">
      <sdds-header-dropdown>
      <sdds-icon name="profile" size="16px"> </sdds-icon>
        <sdds-header-user 
          img="https://www.svgrepo.com/show/170303/avatar.svg" 
          alt="Alt"
          header="Header"
          subheader="Subeader"
          slot="child"
          >
        </sdds-header-user>
      </sdds-header-dropdown>
      <sdds-header-launcher>
        <sdds-icon name="bento" size="20px"> </sdds-icon>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
        <sdds-header-button divider="divider" slot="child">
          Button
        </sdds-header-button>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
      </sdds-header-launcher>
    </div>
  </sdds-header>
  `,
  );

export const WebComponent = Template.bind({});
