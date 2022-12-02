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
    variant: {
      name: "Variant",
      control: {
        type: 'radio'
      }, 
      options: ['Primary', 'Secondary'],
    }
  },
  args: {
    variant: 'Primary'
  }
};

const Template = ({variant}) =>
  formatHtmlPreview(`
  <sdds-inline-tabs-fullbleed id="inline-tabs-fullbleed-example" variant="${variant.toLowerCase()}">
      <a href="#">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab__active">Active tab</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab__disabled">Disabled tab</a>
    </sdds-inline-tabs-fullbleed>
`);

export const InlineTabsFullbleed = Template.bind({});
InlineTabsFullbleed.args = {};
