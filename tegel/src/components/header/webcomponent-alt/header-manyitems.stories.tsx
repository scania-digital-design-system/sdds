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
    
    <sdds-header-link-v2 slot="end" href="https://scania.com" class="demo-hide demo-xs-show">
      <sdds-icon name="profile" size="20px"></sdds-icon>
    </sdds-header-link-v2>

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
        About us
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2>
        Trucks
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2>
        Our services
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2>
        Values
      </sdds-side-menu-button-v2>

      <sdds-side-menu-button-v2 slot="end" class="demo-xs-hide">
        <sdds-icon slot="icon" name="profile" size="24px"> </sdds-icon>
        Profile
      </sdds-side-menu-button-v2>

    </sdds-side-menu-v2>

    <main class="sdds-u-w-100 sdds-u-h-100 sdds-u-p3" style="box-sizing: border-box;">
      <p>If there are more than three buttons and/or links, they should be placed in a persistent side menu, which is always visible on large screens.</p>

      <p>Tip: Resize the window to see the side menu become a drawer.</p>
    </main>
  </div>
  `,
  );

export const ManyHeaderItems = Template.bind({});
