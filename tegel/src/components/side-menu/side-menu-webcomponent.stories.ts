import { formatHtmlPreview } from '../../utils/utils';
import readme from './webcomponent/readme.md';
import readmeSideMenuItem from './webcomponent/side-menu-item/readme.md';
import readmeSideMenuDropdown from './webcomponent/side-menu-dropdown/readme.md';
import readmeSideMenuDropdownItem from './webcomponent/side-menu-dropdown-item/readme.md';

export default {
  title: 'Components/Side Menu',
  parameters: {
    notes: {
      'Side menu': readme,
      'Side menu item': readmeSideMenuItem,
      'Side menu dropdown': readmeSideMenuDropdown,
      'Side menu dropdown item': readmeSideMenuDropdownItem,
    },
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
    <sdds-side-menu-item avatar-header="Martin" avatar-subheader="Jarsäter" type="user-profile" >
    test
    </sdds-side-menu-item>
    <sdds-side-menu-item icon="truck" text="Button" type="button">
    </sdds-side-menu-item>
    <sdds-side-menu-item icon="truck" text="Link" type="link">
    </sdds-side-menu-item>
  </div>
</sdds-side-menu>`);

export const WebComponent = Template.bind({});
