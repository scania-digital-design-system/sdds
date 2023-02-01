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
      options: ['Primary', 'Secondary'],
    },
  },
  args: {
    modeVariant: 'Primary',
  },
};

const Template = ({ modeVariant }) =>
  formatHtmlPreview(`
  <sdds-inline-tabs mode-variant="${modeVariant.toLowerCase()}">
      <sdds-inline-tab label="Tab text"> 
      </sdds-inline-tab>
      <sdds-inline-tab label="Tab text with longer text" selected> 
      </sdds-inline-tab> 
      <sdds-inline-tab disabled label="Tab text"> 
      </sdds-inline-tab> 
   </sdds-inline-tabs>
`);

export const InlineTabs = Template.bind({});
