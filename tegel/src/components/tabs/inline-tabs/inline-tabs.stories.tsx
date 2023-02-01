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
      name: 'Variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
  },
};

const Template = ({ modeVariant }) =>
  formatHtmlPreview(`
  <sdds-inline-tabs mode-variant="${modeVariant.toLowerCase()}">
      <sdds-inline-tab label="Tab one"> 
      </sdds-inline-tab>
      <sdds-inline-tab label="Tab two" selected> 
      </sdds-inline-tab> 
      <sdds-inline-tab disabled label="Tab three"> 
      </sdds-inline-tab>
      <sdds-inline-tab label="Tab four"> 
      </sdds-inline-tab>
      <sdds-inline-tab label="Tab five"> 
      </sdds-inline-tab>
      <sdds-inline-tab label="Tab six"> 
      </sdds-inline-tab>
   </sdds-inline-tabs>

   <!-- Script tag with eventlistener for demo purposes. -->
   <script>
      document.addEventListener('sddsInlineTabChangeEvent',(event) => {
        console.log('Tab:',event.detail.selectedTab,'with index:',event.detail.selectedTabIndex ,'was selected.')
      })
    </script>
`);

export const InlineTabs = Template.bind({});
