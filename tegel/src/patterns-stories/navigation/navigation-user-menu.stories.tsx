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
  argTypes: {
    siteName: {
      name: 'Site name',
      description: 'Set a custom title for the header',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = () =>
  formatHtmlPreview(
    `
    <script>
      /* For demonstration purposes only. Do this in the preferred way of your framework instead. */
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


    <div class="demo-layout">
      <sdds-header>
        <sdds-header-hamburger class="demo-xs-hide" onclick="demoSideMenu.open = true;"></sdds-header-hamburger>

        <sdds-header-title>
          Example: User menu
        </sdds-header-title>

        <sdds-header-launcher slot="end">
        <sdds-header-launcher-list-title>Sustainable tools</sdds-header-launcher-list-title>
        <sdds-header-launcher-list>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
          <sdds-header-launcher-list-link href="https://tegel.scania.com">Button</sdds-header-launcher-list-link>
        </sdds-header-launcher-list>
      </sdds-header-launcher>

        <sdds-header-dropdown slot="end" class="demo-hide demo-xs-show" no-dropdown-icon selected>
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

        <sdds-side-menu-dropdown slot="end" class="demo-xs-hide" selected initial-open>
          <sdds-side-menu-user 
            slot="button-label" 
            heading="Name Namesson" 
            subheading="Company name" 
            image-src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" 
            image-alt="">
          </sdds-side-menu-user>
          <sdds-side-menu-dropdown-list type="lg">
            <sdds-side-menu-dropdown-list-link selected>My Instructions</sdds-side-menu-dropdown-list-link>
            <sdds-side-menu-dropdown-list-link>Task List</sdds-side-menu-dropdown-list-link>
          </sdds-side-menu-dropdown-list>
        </sdds-side-menu-dropdown>

      </sdds-side-menu>

      <main class="demo-main sdds-u-p3" style="box-sizing: border-box;">
        <p>If you display a user menu, a side menu is needed to show it on extra small screens.</p>
        <br/>
        <p><i>Tip: Resize the window to see the user menu move in to a side menu drawer.</i></p>
      </main>
    </div>
  `,
  );

export const UserMenu = Template.bind({});
