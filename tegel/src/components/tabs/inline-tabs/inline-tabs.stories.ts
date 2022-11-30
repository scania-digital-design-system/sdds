import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs/Inline Tabs',
  parameters: {
    notes: readme,
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
    autoHeight: {
      name: 'Same height',
      description: 'Make all tab panels as tall as the tallest tab panel',
      control: {
        type: 'boolean',
      },
    },
    altBgColor: {
      name: 'Alternative background color',
      description: 'Style for display on the alternative background color',
      control: {
        type: 'boolean',
      },
    },
    backgrounds: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    autoHeight: false,
    altBgColor: false,
  },
};
// eslint-disable-next-line arrow-body-style
const Template = ({ autoHeight = false, altBgColor = false }) => {
  return formatHtmlPreview(`
    <sdds-inline-tabs ${autoHeight ? 'auto-height' : ''} ${altBgColor ? 'color-variant="on-grey"' : ''}>
      <div data-name="Tab with tall content">
        Tab panel 1
        <div style="width:200px; height:200px; background: linear-gradient(125deg,rgba(255, 0, 0, 1) 0%,rgba(255, 255, 0, 1) 33%,rgba(0, 192, 255, 1) 66%,rgba(192, 0, 255, 1) 100%);"></div>
      </div>
      <div data-name="Default tab" data-default="true">
        Tab panel 2
      </div>
      <div data-name="Disabled tab" aria-disabled="true">
        Tab panel 3
      </div>
    </sdds-inline-tabs>
`);
};

export const Default = Template.bind({});
Default.args = {};
