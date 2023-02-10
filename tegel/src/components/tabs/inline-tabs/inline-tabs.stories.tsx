import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeLink from '../tab-link/readme.md';
import readmeButton from '../tab-button/readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: { 'Inline tabs': readme, 'Tab button': readmeButton, 'Tab link:': readmeLink },
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
    childType: {
      name: 'Child type',
      description: 'Type of child element, button/link.',
      control: {
        type: 'radio',
      },
      options: ['Button', 'Link'],
    },
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
  },
  args: {
    modeVariant: 'Inherit from parent',
    childType: 'Link',
  },
};

const Template = ({ modeVariant, childType }) =>
  formatHtmlPreview(`
  <sdds-inline-tabs
    mode-variant="${modeVariant.toLowerCase()}">
      ${
        childType === 'Link'
          ? `
        <sdds-tab-link link-href="#">
          First tab
        </sdds-tab-link>
        <sdds-tab-link link-href="#">
          Second tab is waaay longer
        </sdds-tab-link>
        <sdds-tab-link selected link-href="#">
          Third tab
        </sdds-tab-link>
        <sdds-tab-link disabled link-href="#">
          Fourth tab
        </sdds-tab-link>
        `
          : ''
      }
      ${
        childType === 'Button'
          ? `
        <sdds-tab-button>
          First tab
        </sdds-tab-button>
        <sdds-tab-button>
          Second tab is waaay longer
        </sdds-tab-button>
        <sdds-tab-button selected>
          Third tab
        </sdds-tab-button>
        <sdds-tab-button disabled>
          Fourth tab
        </sdds-tab-button>
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

   document.addEventListener('sddsTabChangeEvent', (event) => {
     selectedTab.innerHTML = event.detail.selectedTab
     selectedTabIndex.innerHTML = event.detail.selectedTabIndex
   })
   </script>
`);

export const InlineTabs = Template.bind({});
