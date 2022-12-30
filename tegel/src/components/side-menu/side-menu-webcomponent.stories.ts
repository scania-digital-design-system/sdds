import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Side Menu',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
  argTypes: {
    collapsable: {
      name: 'Collapsable',
      description: 'Sets the side menu as collapsable.',
      control: {
        type: 'boolean',
      },
    },

    collapsed: {
      name: 'Collapsed',
      description: 'Toggle the side menus collapsed state.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    collapsable: true,
    collapsed: false,
  },
};

const Template = ({ collapsable, collapsed }) =>
  formatHtmlPreview(`
  <sdds-side-menu ${collapsed ? 'collapsed' : ''} ${
    collapsable ? 'collapsable' : ''
  } slot="side-menu">
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
</sdds-side-menu>`);

export const WebComponent = Template.bind({});
