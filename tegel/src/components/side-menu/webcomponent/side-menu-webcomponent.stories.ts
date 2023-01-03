import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeSideMenuLink from './side-menu-link/readme.md';
import readmeSideMenuButton from './side-menu-button/readme.md';
import readmeSideMenUser from './side-menu-user/readme.md';
import readmeSideMenuDropdown from './side-menu-dropdown/readme.md';

export default {
  title: 'Components/Side Menu',
  parameters: {
    notes: {
      'Side menu': readme,
      'Side menu link': readmeSideMenuLink,
      'Side menu button': readmeSideMenuButton,
      'Side menu user': readmeSideMenUser,
      'Side menu dropdown': readmeSideMenuDropdown,
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
  <sdds-side-menu collapsed ${collapsed ? 'collapsed' : ''} ${
    collapsable ? 'collapsable' : ''
  } slot="side-menu">
  <div slot="top">
    <sdds-side-menu-button selected icon="truck">
      Button with a veeeery long name
    </sdds-side-menu-button>
    <sdds-side-menu-link icon="truck">
      Link with a veeeeery long name
    </sdds-side-menu-link>
    <sdds-side-menu-dropdown selected>
      Dropdown with a veeeery long name
      <div slot="children">
        <sdds-side-menu-button>
          Button with a veeeeeeeeerey long name
        </sdds-side-menu-button>
        <sdds-side-menu-link selected >
          Link
        </sdds-side-menu-link>
      </div>
    </sdds-side-menu-dropdown>
    <sdds-side-menu-dropdown>
    Dropdown
      <div slot="children">
        <sdds-side-menu-button >
          Button
        </sdds-side-menu-button>
        <sdds-side-menu-link >
          Link
        </sdds-side-menu-link>
      </div>
    </sdds-side-menu-dropdown>
  </div>
  <div slot="bottom">
  <sdds-side-menu-user header="Martin" subheader="Jarsäter">
  </sdds-side-menu-user>
  <sdds-side-menu-button icon="print" >
    Button
  </sdds-side-menu-button>
  </div>
</sdds-side-menu>`);

export const WebComponent = Template.bind({});
