import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeLink from './inline-tabs-link/readme.md';
import readmeButton from './inline-tabs-button/readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: {
      'Inline tabs': readme,
      'Inline tabs button': readmeButton,
      'Inline tabs link': readmeLink,
    },
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
  },
  args: {
    modeVariant: 'Inherit from parent',
    tabType: 'Link',
  },
};

const Template = ({ modeVariant, tabType }) =>
  formatHtmlPreview(`
  <sdds-inline-tabs
    mode-variant="${modeVariant.toLowerCase()}">
      ${
        tabType === 'Link'
          ? `
        <sdds-inline-tabs-link href="#">
          First tab
        </sdds-inline-tabs-link>
        <sdds-inline-tabs-link href="#">
          Second tab is longer
        </sdds-inline-tabs-link>
        <sdds-inline-tabs-link selected href="#">
          Third tab
        </sdds-inline-tabs-link>
        <sdds-inline-tabs-link disabled href="#">
          Fourth tab
        </sdds-inline-tabs-link>
        `
          : ''
      }
      ${
        tabType === 'Button'
          ? `
        <sdds-inline-tabs-button>
          First tab
        </sdds-inline-tabs-button>
        <sdds-inline-tabs-button>
          Second tab is longer
        </sdds-inline-tabs-button>
        <sdds-inline-tabs-button selected>
          Third tab
        </sdds-inline-tabs-button>
        <sdds-inline-tabs-button disabled>
          Fourth tab
        </sdds-inline-tabs-button>
        `
          : ''
      }
   </sdds-inline-tabs>

   <!-- Demo container. -->
   <div class="demo-container">
     <h4 class="sdds-headline-04">Selected tab: <span class="selectedTab"></span></h4>
     <h4 class="sdds-headline-04">Selected tabindex: <span class="selectedTabIndex"></span></h4>
   </div>

   <!-- Script tag with eventlistener for demo purposes. -->
   <script>
   selectedTab = document.getElementsByClassName('selectedTab')[0]
   selectedTabIndex = document.getElementsByClassName('selectedTabIndex')[0]
   tabs = document.querySelector('sdds-inline-tabs');
   
   tabs.addEventListener('sddsChange', (event) => {
      console.log(event)
     selectedTab.innerHTML = event.detail.selectedTab.tab
     selectedTabIndex.innerHTML = event.detail.selectedTab.tabIndex
   })
   </script>
`);

export const InlineTabs = Template.bind({});
