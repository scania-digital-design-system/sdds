import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A31546&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A31546&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description:
        'Mode variation adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    tabType: {
      name: 'Tab type',
      description: 'Type of child element, button/link.',
      control: {
        type: 'radio',
      },
      options: ['Button', 'Link'],
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    tabType: 'Link',
  },
};

// Why role="link" on a disabled link: https://www.scottohara.me/blog/2021/05/28/disabled-links.html
const Template = ({ tabType, modeVariant }) =>
  formatHtmlPreview(`
    <sdds-navigation-tabs 
      ${modeVariant !== 'Inherit from parent' ? ` mode-variant="${modeVariant.toLowerCase()}"` : ''}
    >
      ${
        tabType === 'Link'
          ? `
      <sdds-navigation-tabs-link selected href="#" > First tab
      </sdds-navigation-tabs-link>
      <sdds-navigation-tabs-link href="#" > Second tab
      </sdds-navigation-tabs-link>
      <sdds-navigation-tabs-link href="#" > Third tab
      </sdds-navigation-tabs-link>
      <sdds-navigation-tabs-link href="#" disabled> Fourth tab
      </sdds-navigation-tabs-link>
      `
          : ''
      }
      ${
        tabType === 'Button'
          ? `
      <sdds-navigation-tabs-button selected> First tab
      </sdds-navigation-tabs-button>
      <sdds-navigation-tabs-button> Second tab
      </sdds-navigation-tabs-button>
      <sdds-navigation-tabs-button > Third tab
      </sdds-navigation-tabs-button>
      <sdds-navigation-tabs-button disabled> Fourth tab
      </sdds-navigation-tabs-button>
      `
          : ''
      }
    </sdds-navigation-tabs>

    <!-- Demo container. -->
    <div class="demo-container">
      <h4 class="sdds-headline-04">Selected tab: <span class="selectedTab"></span></h4>
      <h4 class="sdds-headline-04">Selected tabindex: <span class="selectedTabIndex"></span></h4>
    </div>
 
    <!-- Script tag with eventlistener for demo purposes. -->
    <script>
    selectedTab = document.getElementsByClassName('selectedTab')[0]
    selectedTabIndex = document.getElementsByClassName('selectedTabIndex')[0]
    tabs = document.querySelector('sdds-navigation-tabs');
    
    tabs.addEventListener('sddsChange', (event) => {
       console.log(event)
      selectedTab.innerHTML = event.detail.selectedTab.tab
      selectedTabIndex.innerHTML = event.detail.selectedTab.tabIndex
    })
    </script>
    `);

export const NavigationTabs = Template.bind({});