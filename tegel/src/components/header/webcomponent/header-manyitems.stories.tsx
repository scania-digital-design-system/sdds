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
      :root {
        --app-bar-height: 64px;
        --side-menu-width: 272px;
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

      @media (min-width: 672px) {
        #demo-side-menu {
          height: calc(100vh - var(--app-bar-height));
          position: sticky;
          top: var(--app-bar-height);
          left: 0px;
        }
      }

      /* If an extra button in the header is required except on */
      /* very narrow screens, you can use classes like these: */
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
      <sdds-header class="demo-header">
        <sdds-header-hamburger onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

        <sdds-header-title>
          Example: Many items
        </sdds-header-title>

        <sdds-header-button slot="end" onclick="alert('clicked')">
          <sdds-icon name="calendar" size="20px"></sdds-icon>
        </sdds-header-button>

        <sdds-header-launcher slot="end">
          <sdds-header-launcher-list-title>Good</sdds-header-launcher-list-title>
          <sdds-header-launcher-list>
            <sdds-header-launcher-list-link href="https://tegel.scania.com">Spider man</sdds-header-launcher-list-link>
            <sdds-header-launcher-list-link href="https://tegel.scania.com">Groot</sdds-header-launcher-list-link>
          </sdds-header-launcher-list>
          <sdds-header-launcher-list-title>Evil</sdds-header-launcher-list-title>
          <sdds-header-launcher-list>
            <sdds-header-launcher-list-link href="https://tegel.scania.com">Dr Octopus</sdds-header-launcher-list-link>
            <sdds-header-launcher-list-link href="https://tegel.scania.com">Apocalypse</sdds-header-launcher-list-link>
            <sdds-header-launcher-list-link href="https://tegel.scania.com">Scarlet Witch</sdds-header-launcher-list-link>
          </sdds-header-launcher-list>
        </sdds-header-launcher>

        <sdds-header-dropdown slot="end" placement="end" no-dropdown-icon  class="demo-hide demo-xs-show">
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
        </sdds-header-dropdown>

        <sdds-header-logo slot="end" link-href="https://design.scania.com">
        </sdds-header-logo>

      </sdds-header>

      <div class="demo-wrap-side-menu-and-main">
        <!-- Note: the "persistent" property keeps the menu open on desktop -->
        <sdds-side-menu id="demo-side-menu" persistent>
          <sdds-side-menu-overlay slot="overlay" onclick="demoSideMenu.open = false;"></sdds-side-menu-overlay>

          <sdds-side-menu-close-button slot="close-button" onclick="demoSideMenu.open = false;"></sdds-side-menu-close-button>

          <sdds-side-menu-button>
            <sdds-icon slot="icon" name="timer" size="24"></sdds-icon>
            About us
          </sdds-side-menu-button>

          <sdds-side-menu-button selected>
            <sdds-icon slot="icon" name="truck" size="24"></sdds-icon>
            Trucks
          </sdds-side-menu-button>

          <sdds-side-menu-button>
            <sdds-icon slot="icon" name="wifi" size="24"></sdds-icon>
            Our services
          </sdds-side-menu-button>

          <sdds-side-menu-dropdown>
            <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
            <span slot="button-label">
              Drivers
            </span>
            <sdds-side-menu-dropdown-list>
              <sdds-side-menu-dropdown-list-link>Judy Alvarez</sdds-side-menu-dropdown-list-link>
              <sdds-side-menu-dropdown-list-link>Johnny Silverhand</sdds-side-menu-dropdown-list-link>
            </sdds-side-menu-dropdown-list>
          </sdds-side-menu-dropdown>

          <sdds-side-menu-button>
            <sdds-icon slot="icon" name="document_tool" size="24"></sdds-icon>
            Documents
          </sdds-side-menu-button>

          <sdds-side-menu-dropdown slot="end" class="demo-xs-hide">
            <sdds-side-menu-user 
              slot="button-label" 
              heading="Name Namesson" 
              subheading="Company name" 
              image-src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" 
              image-alt="">
            </sdds-side-menu-user>
            <sdds-side-menu-dropdown-list>
              <sdds-side-menu-dropdown-list-link>Albin Larsson</sdds-side-menu-dropdown-list-link>
              <sdds-side-menu-dropdown-list-link>Viktor Skofors</sdds-side-menu-dropdown-list-link>
            </sdds-side-menu-dropdown-list>
          </sdds-side-menu-dropdown>
          
          <sdds-side-menu-button slot="end">
            <sdds-icon slot="icon" name="calendar" size="24"></sdds-icon>
            Calendar
          </sdds-side-menu-button>

          <sdds-side-menu-collapse-button slot="sticky-end" onclick="demoSideMenu.collapsed = !demoSideMenu.collapsed;"></sdds-side-menu-collapse-button>

        </sdds-side-menu>

        <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
          <p>If there are more than three buttons and/or links, they should be placed in a persistent side menu, which is always visible on large screens.</p>

          <p>Tip: Resize the window to see the side menu become a drawer.</p>
        </main>
      </div>
    </div>
  `,
  );

export const ManyHeaderItems = Template.bind({});
