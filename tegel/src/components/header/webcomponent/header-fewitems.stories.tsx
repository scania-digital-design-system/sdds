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

  <sdds-header>
    <sdds-header-hamburger onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

    <sdds-header-title>
      Example: Few items
    </sdds-header-title>

    <sdds-header-button onclick="alert('About us clicked');">
      About us
    </sdds-header-button>

    <sdds-header-link href="https://www.google.se">
      Trucks
    </sdds-header-link>

    <sdds-header-dropdown>
      <span slot="button-label">Drivers</span>
      <sdds-header-dropdown-list>
        <sdds-header-dropdown-list-link>
          Wolverine
        </sdds-header-dropdown-list-link>
        <sdds-header-dropdown-list-link>
          Professor X
        </sdds-header-dropdown-list-link>
      </sdds-header-dropdown-list>
    </sdds-header-dropdown>

    <sdds-header-button slot="end" onclick="alert('Calendar button clicked')">
      <sdds-icon name="calendar" size="20px"></sdds-icon>
    </sdds-header-button>

    <sdds-header-launcher slot="end">
      <sdds-header-launcher-grid-title>Long title one two three</sdds-header-launcher-grid-title>
      <sdds-header-launcher-grid>
        <sdds-header-launcher-grid-link href="https://tegel.scania.com">
          <sdds-icon name="star" size="32"></sdds-icon>
          Long link name test
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
    </sdds-header-launcher>

    <sdds-header-dropdown slot="end" placement="end" no-dropdown-icon class="demo-hide demo-xs-show">
      <img slot="button-icon" src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" alt="User menu."/>
      <sdds-header-dropdown-list-lg>
        <sdds-header-dropdown-list-lg-user
          heading="Name Nameson"
          subheading="Company name">
        </sdds-header-dropdown-list-lg-user>
        <sdds-header-dropdown-list-lg-link>
          Long link label here lorem ipsum
        </sdds-header-dropdown-list-lg-link>
        <sdds-header-dropdown-list-lg-link>
          Link there
        </sdds-header-dropdown-list-lg-link>
      </sdds-header-dropdown-list-lg>
    </sdds-header-dropdown>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header>


  <sdds-side-menu id="demo-side-menu">
    <sdds-side-menu-overlay slot="overlay" onclick="demoSideMenu.open = false;"></sdds-side-menu-overlay>

    <sdds-side-menu-close-button slot="close-button" onclick="demoSideMenu.open = false;"></sdds-side-menu-close-button>

    <sdds-side-menu-button>
      <sdds-icon slot="icon" name="timer" size="24"></sdds-icon>
      About us
    </sdds-side-menu-button>

    <sdds-side-menu-button>
      <sdds-icon slot="icon" name="truck" size="24"></sdds-icon>
      Trucks
    </sdds-side-menu-button>

    <sdds-side-menu-dropdown>
      <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
      <span slot="button-label">
        Drivers
      </span>
      <sdds-side-menu-dropdown-list>
        <sdds-side-menu-dropdown-list-link>Wolverine</sdds-side-menu-dropdown-list-link>
        <sdds-side-menu-dropdown-list-link>Professor X</sdds-side-menu-dropdown-list-link>
      </sdds-side-menu-dropdown-list>
    </sdds-side-menu-dropdown>

    <sdds-side-menu-dropdown slot="end" class="demo-xs-hide">
      <sdds-side-menu-user-image slot="button-icon">
        <img
          src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
          alt="User menu."
        /> 
      </sdds-side-menu-user-image>
      <span slot="button-label">
        Name Namesson
        <div style="color: gray;">Company name</div>
      </span>
      <sdds-side-menu-dropdown-list>
        <sdds-side-menu-dropdown-list-link>Albin Larsson</sdds-side-menu-dropdown-list-link>
        <sdds-side-menu-dropdown-list-link>Viktor Skofors</sdds-side-menu-dropdown-list-link>
      </sdds-side-menu-dropdown-list>
    </sdds-side-menu-dropdown>

    <sdds-side-menu-button slot="end" class="demo-xs-hide">
      <sdds-side-menu-user-image slot="icon">
        <img
          src="https://via.placeholder.com/50"
          alt="User menu."
        /> 
      </sdds-side-menu-user-image>
      <span >
        Name Namesson
        <div style="color: gray;">Company name</div>
      </span>
    </sdds-side-menu-button>

  </sdds-side-menu>


  <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
    <p>If the header contains navigational items like links or buttons, a side menu is needed for small screens.</p>
    <p>Tip: Resize the window to see the buttons move in to the side menu.</p>
  </main>
  `,
  );

export const FewHeaderItems = Template.bind({});
