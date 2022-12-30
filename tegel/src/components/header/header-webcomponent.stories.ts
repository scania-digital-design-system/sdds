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
  <sdds-header site-name="Application" icon-href="https://www.scania.com">
    <sdds-header-inline-menu slot="inline-menu">
        <sdds-header-inline-menu-item
          type="button"
          text="Item 2">
        </sdds-header-inline-menu-item>
        <sdds-header-inline-menu-item
          type="link"
          text="Item 2">
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
          text="Item 2">
      </sdds-header-inline-menu-item>
    </sdds-header-inline-menu>

    <sdds-header-toolbar slot="toolbar">
      <sdds-header-toolbar-dropdown show-on-mobile full-height>
        <sdds-header-toolbar-dropdown-item type="button" text="Button">
        </sdds-header-toolbar-dropdown-item>
        <sdds-header-toolbar-dropdown-item type="category" text="Category">
        </sdds-header-toolbar-dropdown-item>
        <sdds-header-toolbar-dropdown-item type="link" text="Link">
        </sdds-header-toolbar-dropdown-item>
      </sdds-header-toolbar-dropdown>
      <sdds-header-toolbar-dropdown avatar>
        <sdds-header-toolbar-dropdown-item type="avatar" avatar-subheading="Subheading" avatar-heading="Heading">
        </sdds-header-toolbar-dropdown-item>
        <sdds-header-toolbar-dropdown-item type="link" text="Link">
        </sdds-header-toolbar-dropdown-item>
        <sdds-header-toolbar-dropdown-item type="button" text="Button">
        </sdds-header-toolbar-dropdown-item>
      </sdds-header-toolbar-dropdown>
      <sdds-header-toolbar-item type="link">
      </sdds-header-toolbar-item>
    </sdds-header-toolbar>
  </sdds-header>

  <sdds-side-menu slot="side-menu" header-side-menu>
  <div slot="top">
    <sdds-side-menu-item icon="truck" text="Button"  type="button">
    test
    </sdds-side-menu-item>
    <sdds-side-menu-dropdown text="Dropdown">
      <sdds-side-menu-dropdown-item type="button" text="Button">
      </sdds-side-menu-dropdown-item>
      <sdds-side-menu-dropdown-item type="link" text="Link">
      </sdds-side-menu-dropdown-item>
    </sdds-side-menu-dropdown>
    <sdds-side-menu-dropdown text="Dropdown">
      <sdds-side-menu-dropdown-item type="button" text="Button">
      </sdds-side-menu-dropdown-item>
      <sdds-side-menu-dropdown-item type="link" text="Link">
      </sdds-side-menu-dropdown-item>
    </sdds-side-menu-dropdown>
    <sdds-side-menu-item text="Link" type="link">
    test
    </sdds-side-menu-item>
  </div>
  <div slot="bottom">
    <sdds-side-menu-item avatar-header="Martin" avatar-subheader="Jarsäter" type="user-profile" position="bottom">
    test
    </sdds-side-menu-item>
    <sdds-side-menu-item icon="truck" text="Button" type="button" position="bottom">
    </sdds-side-menu-item>
    <sdds-side-menu-item icon="truck" text="Link" type="link" position="bottom">
    </sdds-side-menu-item>
  </div>
</sdds-side-menu>
  `,
  );

export const WebComponent = Template.bind({});
