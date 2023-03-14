import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeLink from './folder-tabs-link/readme.md';
import readmeButton from './folder-tabs-button/readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: {
      'Folder tabs': readme,
      'Folder tabs button': readmeButton,
      'Folder tabs link': readmeLink,
    },
    backgrounds: { default: 'white' },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A32834&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10544%3A32834&t=Ne6myqwca5m00de7-1',
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
    backgrounds: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    tabType: 'Button',
  },
};

const Template = ({ modeVariant, tabType }) =>
  formatHtmlPreview(`
    <sdds-folder-tabs
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}>
      ${
        tabType === 'Link'
          ? `
      <sdds-folder-tabs-link href="#">
        First tab
      </sdds-folder-tabs-link>
      <sdds-folder-tabs-link href="#">
        Second tab is much longer
      </sdds-folder-tabs-link>
      <sdds-folder-tabs-link selected href="#">
        Third tab
      </sdds-folder-tabs-link>
      <sdds-folder-tabs-link disabled href="#">
        Fourth tab
      </sdds-folder-tabs-link>
      `
          : ''
      }
      ${
        tabType === 'Button'
          ? `
      <sdds-folder-tabs-button>
        First tab
      </sdds-folder-tabs-button>
      <sdds-folder-tabs-button>
      Second tab is much longer
      </sdds-folder-tabs-button>
      <sdds-folder-tabs-button selected>
        Third tab
      </sdds-folder-tabs-button>
      <sdds-folder-tabs-button disabled>
        Fourth tab
      </sdds-folder-tabs-button>
      `
          : ''
      }
    </sdds-folder-tabs>

    <!-- Demo container. -->
    <div class="demo-container">
      <h4 class="sdds-headline-04">Selected tab: <span class="selectedTab"></span></h4>
      <h4 class="sdds-headline-04">Selected tabindex: <span class="selectedTabIndex"></span></h4>
    </div>

    <!-- Script tag with eventlistener for demo purposes. -->
    <script>
    selectedTab = document.getElementsByClassName('selectedTab')[0]
    selectedTabIndex = document.getElementsByClassName('selectedTabIndex')[0]
    tabs = document.querySelector('sdds-folder-tabs');
  
    tabs.addEventListener('sddsChange', (event) => {
      selectedTab.innerHTML = event.detail.selectedTab
      selectedTabIndex.innerHTML = event.detail.selectedTabIndex
    })
    </script>
`);

export const FolderTabs = Template.bind({});
