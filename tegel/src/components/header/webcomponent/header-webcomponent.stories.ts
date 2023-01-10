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
  <sdds-header site-name="${siteName}" icon-href="https://www.scania.com">
    <div slot="inline-menu">
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

    <div slot="toolbar">
      <sdds-header-dropdown no-dropdown-icon wide>
        <sdds-icon name="profile" size="20px"> </sdds-icon>
        <sdds-header-user tall
          header="Header"
          subheader="Subeader"
          slot="child"
          >
        </sdds-header-user>
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
      </sdds-header-dropdown>
      <sdds-header-launcher variant="list">
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
        <sdds-header-button divider="test" slot="child">
          Button
        </sdds-header-button>
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
        <sdds-header-button slot="child">
          Button
        </sdds-header-button>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
        <sdds-header-link slot="child">
          Link
        </sdds-header-link>
      </sdds-header-launcher>
    </div>

    <div slot="mobile-menu-top">
      <sdds-header-link>
        <sdds-icon name="truck" size="24px"> </sdds-icon>
          Link - top
        </sdds-header-link>
        <sdds-header-button>
        <sdds-icon name="truck" size="24px"> </sdds-icon>
          Button - top
      </sdds-header-button>
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
    </div>
    <div slot="mobile-menu-bottom">
      <sdds-header-user tall
          img="https://www.svgrepo.com/show/170303/avatar.svg" 
          alt="Alt"
          header="Header"
          subheader="Subeader"
          slot="child">
      </sdds-header-user>
      <sdds-header-link>
        Link - bottom
      </sdds-header-link>
      <sdds-header-button>
        Button - bottom
      </sdds-header-button>
    </div>
  </sdds-header>

  <button id="button">CLICK</button>

  <script>  
    document.getElementById('button').addEventListener('click', (event) => {
      header = document.getElementsByTagName('body')[0]
      const newEvent = new CustomEvent('closeAllEvent')
      header.dispatchEvent(newEvent)
      console.log(newEvent)
    })
  </script>
  `,
  );

export const WebComponent = Template.bind({});
