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
      Example: Many items
    </sdds-header-title>


    <sdds-header-button-v2 slot="end">
      <sdds-icon name="calendar" size="20px"></sdds-icon>
    </sdds-header-button-v2>
    
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

    <sdds-header-launcher-button slot="end"></sdds-header-launcher-button>

    <sdds-header-logo slot="end" link-href="https://design.scania.com">
    </sdds-header-logo>

  </sdds-header-v2>

  <div class="sdds-u-flex">
    <!-- Note: the "persistent" property keeps the menu open on desktop -->
    <sdds-side-menu-v2 id="demo-side-menu" persistent>
      <sdds-side-menu-overlay slot="overlay" onclick="demoSideMenu.open = false;"></sdds-side-menu-overlay>

      <sdds-side-menu-close-button slot="close-button" onclick="demoSideMenu.open = false;"></sdds-side-menu-close-button>

      <sdds-side-menu-button-v2>
        <sdds-icon slot="icon" name="timer" size="24"></sdds-icon>
        About us
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2>
        <sdds-icon slot="icon" name="truck" size="24"></sdds-icon>
        Trucks
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2>
        <sdds-icon slot="icon" name="wifi" size="24"></sdds-icon>
        Our services
      </sdds-side-menu-button-v2>

      <sdds-side-menu-dropdown-v2>
        <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
        <span slot="button-label">
          Drivers
        </span>
        <sdds-side-menu-dropdown-list>
          <sdds-side-menu-dropdown-list-link>Albin Larsson</sdds-side-menu-dropdown-list-link>
          <sdds-side-menu-dropdown-list-link>Viktor Skofors</sdds-side-menu-dropdown-list-link>
        </sdds-side-menu-dropdown-list>
      </sdds-side-menu-dropdown-v2>

      <sdds-side-menu-button-v2>
        <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
        Values
      </sdds-side-menu-button-v2>

      <sdds-side-menu-dropdown-v2 slot="end">
        <sdds-icon slot="button-icon" name="heart" size="24"></sdds-icon>
        <span slot="button-label">
          Drivers
        </span>
        <sdds-side-menu-dropdown-list>
          <sdds-side-menu-dropdown-list-link>Albin Larsson</sdds-side-menu-dropdown-list-link>
          <sdds-side-menu-dropdown-list-link>Viktor Skofors</sdds-side-menu-dropdown-list-link>
        </sdds-side-menu-dropdown-list>
      </sdds-side-menu-dropdown-v2>

      <sdds-side-menu-button-v2 slot="end">
        <sdds-icon slot="icon" name="star" size="24"></sdds-icon>
        Values
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2 slot="end" class="demo-xs-hide">
        <sdds-side-menu-user-v2 heading="Name Namesson" subheading="Company name">
          <img
            slot="image"
            src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
            alt="User menu."
          />
        </sdds-side-menu-user-v2>
      </sdds-side-menu-button-v2>

      <sdds-side-menu-collapse-button slot="end" onclick="demoSideMenu.collapsed = !demoSideMenu.collapsed;"></sdds-side-menu-collapse-button>

    </sdds-side-menu-v2>

    <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
      <p>If there are more than three buttons and/or links, they should be placed in a persistent side menu, which is always visible on large screens.</p>

      <p>Tip: Resize the window to see the side menu become a drawer.</p>
    </main>
  </div>
  `,
  );

export const ManyHeaderItemsAlt = Template.bind({});
