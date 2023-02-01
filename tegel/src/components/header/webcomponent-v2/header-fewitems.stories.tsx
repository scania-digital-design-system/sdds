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
  argTypes: {},
  args: {},
};

const Template = () =>
  formatHtmlPreview(
    `
    <script>
      /* For demonstration purposes only. Don't do this at home. */
      window.demoSideMenu = document.querySelector('#demo-side-menu');
    </script>
    <style>
      /* If an extra button in the header is required except on 
      very narrow screens, you can use classes like these: */
      .demo-hide {
        display: none;
      }

      @media (min-width: 375px) {
        .demo-xs-hide {
          display: none;
        }
        .demo-xs-show {
          display: block;
        }
      }
    </style>

  <sdds-header-v2>
    <sdds-header-hamburger onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

    <sdds-header-title>
      Example: Few items
    </sdds-header-title>

    <sdds-header-button-v2 onclick="alert('About us clicked');">
      About us
    </sdds-header-button-v2>

    <sdds-header-link-v2 href="https://www.google.se">
      Trucks
    </sdds-header-link-v2>

    <sdds-header-dropdown-v2>
      <span slot="button-label">Drivers</span>
      <sdds-header-dropdown-list>
        <sdds-header-dropdown-list-link>
          Albin Larsson
        </sdds-header-dropdown-list-link>
        <sdds-header-dropdown-list-link>
          Viktor Skofors
        </sdds-header-dropdown-list-link>
      </sdds-header-dropdown-list>
    </sdds-header-dropdown-v2>

    <sdds-header-button-v2 slot="end" onclick="alert('Calendar button clicked')">
      <sdds-icon name="calendar" size="20px"></sdds-icon>
    </sdds-header-button-v2>

    <sdds-header-launcher-v2 slot="end">
      <sdds-header-launcher-grid-title>Rad apps</sdds-header-launcher-grid-title>
      <sdds-header-launcher-grid>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="star" size="32"></sdds-icon>
          Alpha
        </sdds-header-launcher-grid-link>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="truck" size="32"></sdds-icon>
          Beta
        </sdds-header-launcher-grid-link>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="fuel_gauge" size="32"></sdds-icon>
          Gamma
        </sdds-header-launcher-grid-link>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="star" size="32"></sdds-icon>
          Epsilon
        </sdds-header-launcher-grid-link>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="truck" size="32"></sdds-icon>
          Pie
        </sdds-header-launcher-grid-link>
      </sdds-header-launcher-grid>
      <sdds-header-launcher-grid-title>Special apps</sdds-header-launcher-grid-title>
      <sdds-header-launcher-grid>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="star" size="32"></sdds-icon>
          Epsilon
        </sdds-header-launcher-grid-link>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="truck" size="32"></sdds-icon>
          Pie
        </sdds-header-launcher-grid-link>
      </sdds-header-launcher-grid>
    </sdds-header-launcher-v2>

    <sdds-header-dropdown-v2 slot="end" placement="end" no-dropdown-icon  class="demo-hide demo-xs-show">
      <img slot="button-icon" src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" alt="User menu."/>
      <sdds-header-dropdown-list-lg>
        <sdds-header-dropdown-list-lg-user
          heading="Name Nameson"
          subheading="Company name">
        </sdds-header-dropdown-list-lg-user>
        <sdds-header-dropdown-list-lg-link>
          Link here
        </sdds-header-dropdown-list-lg-link>
        <sdds-header-dropdown-list-lg-link>
          Link there
        </sdds-header-dropdown-list-lg-link>
      </sdds-header-dropdown-list-lg>
    </sdds-header-dropdown-v2>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header-v2>


  <sdds-side-menu-v2 id="demo-side-menu">
    <sdds-side-menu-overlay slot="overlay" onclick="demoSideMenu.open = false;"></sdds-side-menu-overlay>

    <sdds-side-menu-close-button slot="close-button" onclick="demoSideMenu.open = false;"></sdds-side-menu-close-button>

    <sdds-side-menu-button-v2>
      About us
    </sdds-side-menu-button-v2>

    <sdds-side-menu-button-v2>
      Trucks
    </sdds-side-menu-button-v2>

    <sdds-side-menu-dropdown-v2>
      <sdds-icon slot="button-icon" name="wifi" size="24"></sdds-icon>
      <span slot="button-label">
        Dropdown
      </span>
      <sdds-side-menu-dropdown-list>
        <sdds-side-menu-dropdown-list-link>Button</sdds-side-menu-dropdown-list-link>
        <sdds-side-menu-dropdown-list-link>Button</sdds-side-menu-dropdown-list-link>
        <sdds-side-menu-dropdown-list-link>Button</sdds-side-menu-dropdown-list-link>
      </sdds-side-menu-dropdown-list>
    </sdds-side-menu-dropdown-v2>

    <sdds-side-menu-dropdown-v1>
      Dropdown
      <sdds-icon name="chevron_down" size="24px"></sdds-icon>
      <div slot="children">
        <sdds-side-menu-button>Button</sdds-side-menu-button>
        <sdds-side-menu-link>Link</sdds-side-menu-link>
      </div>
    </sdds-side-menu-dropdown-v1>

    <sdds-side-menu-button-v2 slot="end" class="demo-xs-hide">
      <sdds-icon slot="icon" name="profile" size="24px"> </sdds-icon>
      Profile
    </sdds-side-menu-button-v2>

  </sdds-side-menu-v2>


  <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
    <p>If the header contains navigational items like links or buttons, a side menu is needed for small screens.</p>
    <p>Tip: Resize the window to see the buttons move in to the side menu.</p>
  </main>
  `,
  );

export const FewHeaderItems = Template.bind({});
