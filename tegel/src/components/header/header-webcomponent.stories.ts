import { formatHtmlPreview } from '../../utils/utils';

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

const Template = () =>
  formatHtmlPreview(
    `
  <sdds-header site-name="Test" icon-href="google.se">
    <sdds-header-mobile-menu slot="mobile-menu"></sdds-header-mobile-menu>
    <sdds-header-inline-menu slot="lead">
      <sdds-header-inline-menu-item
        type="button"
        text="Item 2"
        
      >
      </sdds-header-inline-menu-item>
      <sdds-header-inline-menu-item
        type="link"
        text="Item 2"
      >
      </sdds-header-inline-menu-item>

      <sdds-header-inline-menu-dropdown text="Item 3">
      <sdds-header-inline-menu-dropdown-item
        text="Item 2"
        type="button"
      >
      </sdds-header-inline-menu-dropdown-item>
      <sdds-header-inline-menu-dropdown-item
        text="Item 2"
        type="link"
        href="/"
        active
      >
      </sdds-header-inline-menu-dropdown-item>
      </sdds-header-inline-menu-dropdown>
      <sdds-header-inline-menu-item
        type="link"
        text="Item 2"
      >
      </sdds-header-inline-menu-item>
    </sdds-header-inline-menu>

    <sdds-header-toolbar slot="trail">
      <sdds-header-avatar avatar-name="Martin Jarsäter" avatar-subheading="Umain">
      <sdds-header-avatar-item type="button" text="Button">
      </sdds-header-avatar-item>
      <sdds-header-avatar-item type="link" text="Link">
      </sdds-header-avatar-item>
      </sdds-header-avatar>
      <sdds-header-launcher>
        <sdds-header-launcher-item type="category" text="Category">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="category" text="Category">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="button" text="Button">
        </sdds-header-launcher-item>
        <sdds-header-launcher-item type="link" text="Link">
        </sdds-header-launcher-item>
      </sdds-header-launcher>
    </sdds-header-toolbar>
  </sdds-header>
  `,
  );

export const WebComponent = Template.bind({});
