import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeTab from './inline-tab/readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: {
      'Inline tabs': readme,
      'Inline tab': readmeTab,
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
  },
  args: {
    modeVariant: 'Inherit from parent',
    tabType: 'Link',
  },
};

const Template = ({ modeVariant }) =>
  formatHtmlPreview(`
  <sdds-inline-tabs
    ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}>
      <sdds-inline-tab>
        <button>First tab</button>
      </sdds-inline-tab>
      <sdds-inline-tab>
        <button>Second tab is longer</button>
      </sdds-inline-tab>
      <sdds-inline-tab>
        <button>Third tab</button>
      </sdds-inline-tab>
      <sdds-inline-tab disabled>
        <button>Fourth tab</button>
      </sdds-inline-tab>
   </sdds-inline-tabs>

   <button id="test">test</button>

   <!-- Demo container. -->
   <div class="demo-container">
     <h4 class="sdds-headline-04">Selected tabindex: <span class="selectedTabIndex"></span></h4>
   </div>

   <!-- Script tag with eventlistener for demo purposes. -->
   <script>
   selectedTabIndex = document.getElementsByClassName('selectedTabIndex')[0]
   tabs = document.querySelector('sdds-inline-tabs');
   
   tabs.addEventListener('sddsChange', (event) => {
     selectedTabIndex.innerHTML = event.detail.selectedTabIndex
     console.log('Tab change, selected tab index:', event.detail.selectedTabIndex)
    })
   </script>
`);

export const InlineTabs = Template.bind({});
