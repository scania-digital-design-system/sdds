import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Patterns/Navigation',
  parameters: {
    notes: {
      Readme: readme,
    },
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
      /* For demonstration purposes only. Do this in the preferred way of your framework instead. */
      window.demoSideMenu = document.querySelector('#demo-side-menu');
    </script>
    <style>

      /* Note: to make the layout fill the entire viewport height you'll need to set the */
      /* height of the parent element and all of its ancestors to 100%. */
      /* Please note that using 'vh' for this can cause issues on some mobile browsers. */
      .demo-layout {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .demo-main {
        flex-grow: 1;
      }
    
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


    <div class="demo-layout">
      <sdds-header>
        <sdds-header-hamburger onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

        <sdds-header-title>
          Example: Few items
        </sdds-header-title>

        <sdds-header-button onclick="alert('About us clicked');">
          About us
        </sdds-header-button>

        <sdds-header-link href="https://www.google.se">
          Truck types
        </sdds-header-link>

        <sdds-header-dropdown>
          <span slot="button-label">Wheel types</span>
          <sdds-header-dropdown-list>
            <sdds-header-dropdown-list-link>
              Hub-centric wheel
            </sdds-header-dropdown-list-link>
            <sdds-header-dropdown-list-link>
              Rim wheel
            </sdds-header-dropdown-list-link>
          </sdds-header-dropdown-list>
        </sdds-header-dropdown>

        <sdds-header-button slot="end" onclick="alert('Calendar button clicked')">
          <sdds-icon name="calendar" size="20px"></sdds-icon>
        </sdds-header-button>

        <sdds-header-launcher slot="end">
          <sdds-header-launcher-grid-title>Operations and Logistics</sdds-header-launcher-grid-title>
          <sdds-header-launcher-grid>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="star" size="32"></sdds-icon>
              ScaniaCare
            </sdds-header-launcher-grid-link>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="truck" size="32"></sdds-icon>
              ScaniaInsight
            </sdds-header-launcher-grid-link>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="fuel_gauge" size="32"></sdds-icon>
              ScaniaConnect
            </sdds-header-launcher-grid-link>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="star" size="32"></sdds-icon>
              ScaniaPlan
            </sdds-header-launcher-grid-link>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="truck" size="32"></sdds-icon>
              ScaniaTrack
            </sdds-header-launcher-grid-link>
          </sdds-header-launcher-grid>
          <sdds-header-launcher-grid-title>Customer Service</sdds-header-launcher-grid-title>
          <sdds-header-launcher-grid>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="star" size="32"></sdds-icon>
              ScaniaNet
            </sdds-header-launcher-grid-link>
            <sdds-header-launcher-grid-link href="https://tegel.scania.com">
              <sdds-icon name="truck" size="32"></sdds-icon>
              ScaniaRisk
            </sdds-header-launcher-grid-link>
          </sdds-header-launcher-grid>
        </sdds-header-launcher>

        <sdds-header-dropdown slot="end" placement="end" no-dropdown-icon class="demo-hide demo-xs-show" selected>
          <img slot="button-icon" src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" alt="User menu."/>
          <sdds-header-dropdown-list-lg>
            <sdds-header-dropdown-list-lg-user
              heading="Name Nameson"
              subheading="Company name">
            </sdds-header-dropdown-list-lg-user>
            <sdds-header-dropdown-list-lg-link selected>
              My Instructions
            </sdds-header-dropdown-list-lg-link>
            <sdds-header-dropdown-list-lg-link>
              Task List
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
          <sdds-icon slot="icon" name="info" size="24"></sdds-icon>
          About
        </sdds-side-menu-button>

        <sdds-side-menu-button>
          <sdds-icon slot="icon" name="truck" size="24"></sdds-icon>
          Truck types
        </sdds-side-menu-button>

        <sdds-side-menu-dropdown>
          <sdds-icon slot="button-icon" name="tool" size="24"></sdds-icon>
          <span slot="button-label">
            Wheel types
          </span>
          <sdds-side-menu-dropdown-list>
            <sdds-side-menu-dropdown-list-link>Hub-centric wheel</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link>Rim wheel</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown>

        <sdds-side-menu-dropdown slot="end" class="demo-xs-hide" selected>
          <sdds-side-menu-user 
            slot="button-label" 
            heading="Name Namesson" 
            subheading="Company name" 
            image-src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" 
            image-alt="">
          </sdds-side-menu-user>
          <sdds-side-menu-dropdown-list>
            <sdds-side-menu-dropdown-list-link selected>My Instructions</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link>Task List</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown>

      </sdds-side-menu>

      <main class="demo-main sdds-u-p3" style="box-sizing: border-box;">
        <p>If the header contains navigational items like links or buttons, a side menu is needed for small screens.</p>
        <br/>
        <p><i>Tip: Resize the window to see the buttons move in to the side menu drawer.</i></p>
        <p><i>Note: This example has an alterate launcher menu with a grid layout.</i></p>
      </main>
    </div>
  `,
  );

export const FewNavigationItems = Template.bind({});
