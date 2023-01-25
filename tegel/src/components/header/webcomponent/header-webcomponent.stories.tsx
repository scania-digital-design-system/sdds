import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Header',
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
  argTypes: {
    siteName: {
      name: 'Site name',
      description: 'Set a custom title for the header',
      type: 'string',
    },
  },
  args: {
    siteName: 'Application',
  },
};

const Template = ({ siteName }) =>
  formatHtmlPreview(
    `
    <style>
    /* sdds-side-menu {
      display: none;
    }

    sdds-side-menu.open {
      display: block;
    }

    @media all and (min-width: 672px) {
      sdds-side-menu,
      sdds-side-menu.open {
        display: none;
      }
    } */
    </style>
  <sdds-header mobileMenu="true" side-menu-id="my-side-menu" site-name="${siteName}" icon-href="https://www.scania.com">
    <div slot="header-left">
      <sdds-header-link>
        Link
      </sdds-header-link>

      <sdds-header-dropdown>
        <div slot="dropdown-button">
          Dropdown
        </div>
        <div slot="dropdown-menu">
          <sdds-header-link>
            Link
          </sdds-header-link>
          <sdds-header-button active>
            Button
          </sdds-header-button>
          <sdds-header-user 
            img="https://www.svgrepo.com/show/170303/avatar.svg" 
            alt="Alt"
            header="Header"
            subheader="Subeader"
            >
          </sdds-header-user>
        </div>
      </sdds-header-dropdown>
      <sdds-header-link>
        Link
      </sdds-header-link>
    </div>

    <div slot="header-right">
    <sdds-header-dropdown no-dropdown-icon>
        <div slot="dropdown-button">
          <sdds-icon name="profile" size="20px"></sdds-icon>
        </div>
        <div slot="dropdown-menu">
          <sdds-header-link>
            Link
          </sdds-header-link>
          <sdds-header-button active>
            Button
          </sdds-header-button>
          <sdds-header-user 
            img="https://www.svgrepo.com/show/170303/avatar.svg" 
            alt="Alt"
            header="Header"
            subheader="Subeader"
            >
          </sdds-header-user>
        </div>
      </sdds-header-dropdown>
      <sdds-header-launcher variant="grid">
        <sdds-header-button>
          <sdds-icon name="fuel_gauge" size="32"></sdds-icon>
          Button
        </sdds-header-button>
        <sdds-header-button>
          Button
        </sdds-header-button>
        <sdds-header-button>
          Button
        </sdds-header-button>
        <sdds-header-button>
          Button
        </sdds-header-button>
        <sdds-header-button>
          Button
        </sdds-header-button>
        <sdds-header-link>
          Link
        </sdds-header-link>
        <sdds-header-link>
          Link
        </sdds-header-link>
        <sdds-header-link>
          Link
        </sdds-header-link>
      </sdds-header-launcher>
    </div>
    <sdds-side-menu slot="mobile-menu" id="my-side-menu">
    <div slot="top">
      <sdds-side-menu-button selected icon="truck">
        <sdds-icon slot="icon" name="truck" size="24px"> </sdds-icon>
        Selected button
      </sdds-side-menu-button>
      <sdds-side-menu-link icon="truck">
        <sdds-icon slot="icon" name="truck" size="24px"> </sdds-icon>
        Link
      </sdds-side-menu-link>
      <sdds-side-menu-dropdown>
        Dropdown with selected child
        <sdds-icon name="chevron_down" size="24px"> </sdds-icon>
        <div slot="children">
          <sdds-side-menu-button>
            Button with a veeeeeeeeerey long name
          </sdds-side-menu-button>
          <sdds-side-menu-link  selected>
            Link
          </sdds-side-menu-link>
        </div>
      </sdds-side-menu-dropdown>
      <sdds-side-menu-dropdown>
      Dropdown
      <sdds-icon name="chevron_down" size="24px"> </sdds-icon>
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
</sdds-side-menu>
    </sdds-header>
  
  <script>  
    toggleMobileMenu = () => {
        document.getElementsByTagName('sdds-side-menu')[0].classList.toggle('open')
        document.getElementsByClassName('mobile-menu-button')[0].classList.toggle('open')
      }
  </script>
  `,
  );

export const WebComponent = Template.bind({});
