import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';
import readmeTab from './folder-tab/readme.md';

export default {
  title: 'Components/Tabs',
  parameters: {
    notes: { 'Inline Tabs': readme, 'Inline Tab': readmeTab },
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
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
    },
    backgrounds: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
  },
};
// eslint-disable-next-line arrow-body-style
const Template = ({ modeVariant }) => {
  return formatHtmlPreview(`
    <sdds-folder-tabs
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}>
      <sdds-folder-tab label="First tab">
      </sdds-folder-tab>
      <sdds-folder-tab label="Second tab" selected>
      </sdds-folder-tab>
      <sdds-folder-tab label="Third tab" disabled>
      </sdds-folder-tab>
      <sdds-folder-tab label="Fourth tab">
      </sdds-folder-tab>
    </sdds-folder-tabs>

    <!-- Script tag with eventlistener for demo purposes. -->
    <script>
      document.addEventListener('sddsFolderTabChangeEvent',(event) => {
        console.log('Tab:', event.detail.selectedTab, 'was selected.')
      })
    </script>
`);
};

export const FolderTabs = Template.bind({});
