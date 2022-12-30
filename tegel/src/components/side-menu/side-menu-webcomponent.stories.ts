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
};

const Template = () =>
  formatHtmlPreview(`<sdds-side-menu collapsable slot="side-menu">
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
    <sdds-side-menu-item text="Link">
    test
    </sdds-side-menu-item>
  </div>
  <div slot="bottom">
    <sdds-side-menu-item avatar-header="Martin" avatar-subheader="Jarsäter" type="user-profile" position="bottom">
    test
    </sdds-side-menu-item>
    <sdds-side-menu-item icon="truck" text="Button" type="button" position="bottom">
    </sdds-side-menu-item>
  </div>
</sdds-side-menu>`);

export const WebComponent = Template.bind({});
