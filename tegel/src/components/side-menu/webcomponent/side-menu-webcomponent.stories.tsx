import readme from './readme.md';
import { formatHtmlPreview } from '../../../utils/utils';
import readmeSideMenuCloseButton from './side-menu-close-button/readme.md';
import readmeSideMenuOverlay from './side-menu-overlay/readme.md';
import readmeSideMenuUser from './side-menu-user/readme.md';
import readmeSideMenuCollapseButton from './side-menu-collapse-button/readme.md';
import readmeSideMenuDropdown from './side-menu-dropdown/readme.md';

export default {
  title: 'Components/Side Menu',
  parameters: {
    notes: {
      'Side Menu': readme,
      'Side Menu Close Button': readmeSideMenuCloseButton,
      'Side Menu Overlay': readmeSideMenuOverlay,
      'Side Menu User': readmeSideMenuUser,
      'Side Menu Collapse Button': readmeSideMenuCollapseButton,
      'Side Menu Dropdown': readmeSideMenuDropdown,
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
  argTypes: {
    persistent: {
      name: 'Persistent',
      description:
        'Set the side menu to always show. This should be used if there are more navigation items to show than can always fit in the header, more than three header items is a good rule of thumb.',
      control: {
        type: 'boolean',
      },
    },
    collapsible: {
      name: 'Collapsible',
      description: 'Make the side menu collapsible',
      control: {
        type: 'boolean',
      },
      if: { arg: 'persistent', truthy: true },
    },
  },
  args: {
    persistent: true,
    collapsible: false,
  },
};

const Template = ({ persistent, collapsible }) =>
  formatHtmlPreview(
    `
    <script>
    /* For demonstration purposes only. Do this in the preferred way of your framework instead. */
    window.demoSideMenu = document.querySelector('#demo-side-menu');
  </script>
  <style>
    :root {
      --app-bar-height: 64px;
    }

    /* Note: to make the layout fill the entire viewport height you'll need to set the */
    /* height of the parent element and all of its ancestors to 100%. */
    /* Please note that using 'vh' for this can cause issues on some mobile browsers. */
    .demo-layout {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
    .demo-header {
      position: sticky;
      top: 0;
    }
    .demo-wrap-side-menu-and-main {
      display: flex;
      flex-grow: 1;
    }
    ${
      persistent
        ? `
        /* the lg breakpoint is used here to match the breakpoint used in the header */
    @media (min-width: 992px) {
      #demo-side-menu {
        /* We suggest you attach the persistent side menu to your layout like this: */
        height: calc(100vh - var(--app-bar-height));
        position: sticky;
        top: var(--app-bar-height);
        left: 0px;
      }
    }`
        : ''
    }
    /* If an extra button in the header is required except on */
    /* very narrow screens, you can use classes like these: */
    .demo-hide {
      display: none;
    }

    // https://tegel.scania.com/components/header#:~:text=breakpoints%20larger%20than-,%24small%2D375.,-On%20smaller%20breakpoints
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
    <sdds-header class="demo-header">
      <sdds-header-hamburger onclick="demoSideMenu.open = true;" aria-expanded="false" aria-label="Open application drawer" aria-haspopup="true"></sdds-header-hamburger>

      <sdds-header-title>
        My Application
      </sdds-header-title>

      <i style="color:white">Header items omitted for brevity. See patterns/navigation</i>

      <sdds-header-logo slot="end" link-href="https://scania.com" aria-label="Scania - red gryphon on blue shield">
      </sdds-header-logo>
    </sdds-header>

    <div class="demo-wrap-side-menu-and-main">
      <!-- Note: the "persistent" property keeps the menu open on desktop -->
      <sdds-side-menu id="demo-side-menu" ${persistent ? 'persistent' : ''}>
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

        <sdds-side-menu-button>
          <sdds-icon slot="icon" name="wifi" size="24"></sdds-icon>
          Our services
        </sdds-side-menu-button>

        <sdds-side-menu-dropdown default-open selected>
          <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
          <span slot="button-label">
            Wheel types
          </span>
          <sdds-side-menu-dropdown-list>
            <sdds-side-menu-dropdown-list-link href="https://www.scania.com">Hub-centric wheel</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link href="https://www.scania.com" aria-current="page" selected>Rim wheel</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown>

        <sdds-side-menu-button>
          <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
          Values
        </sdds-side-menu-button>

        <sdds-side-menu-button slot="end">
          <sdds-icon slot="icon" name="calendar" size="24"></sdds-icon>
          My Calendar
        </sdds-side-menu-button>

        <sdds-side-menu-button slot="end" class="demo-xs-hide">
          <sdds-side-menu-user heading="Name Namesson" subheading="Company name">
            <img
              slot="image"
              src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
              alt="User menu."
            />
          </sdds-side-menu-user>
        </sdds-side-menu-button>

        ${
          collapsible
            ? `<sdds-side-menu-collapse-button slot="sticky-end" onclick="demoSideMenu.collapsed = !demoSideMenu.collapsed;"></sdds-side-menu-collapse-button>`
            : ''
        }

      </sdds-side-menu>

      <main class="sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
        <p>If there are more than a few buttons and/or links in the header, they might not fit on medium size screens. 
        <br/>In that case they should be placed in a persistent side menu — which is always visible on large screens.</p>

        <p><i>Note: The side menu is sticky, and should not scroll with the main content of the page.</i></p>

        <p><i>Note: The collapse button is optional.</i></p>
        
      </main>
    </div>
  </div>
  `,
  );

export const WebComponent = Template.bind({});
