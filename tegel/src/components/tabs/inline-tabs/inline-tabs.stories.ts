import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs/Inline Tabs',
  parameters: {
    notes: readme,
    backgrounds: { default: 'white' },
  },
  argTypes: {
    autoHeight: {
      name: 'Same height',
      description: 'Make all tab panels as tall as the tallest tab panel',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    altBgColor: {
      name: 'Alternative background color',
      description: 'Style for display on the alternative background color',
      defaultValue: false,
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
};
// eslint-disable-next-line arrow-body-style
const Template = ({ autoHeight = false, altBgColor = false }) => {
  return formatHtmlPreview(`
    <sdds-inline-tabs ${autoHeight ? 'auto-height' : ''} ${altBgColor ? 'color-variant="on-grey"' : ''}>
      <div name="Tab with tall content">
        Tab panel 1
        <div style="width:200px; height:200px; background: linear-gradient(125deg,rgba(255, 0, 0, 1) 0%,rgba(255, 255, 0, 1) 33%,rgba(0, 192, 255, 1) 66%,rgba(192, 0, 255, 1) 100%);"></div>
      </div>
      <div name="Default tab" default>
        Tab panel 2
      </div>
      <div name="Disabled tab" disabled>
        Tab panel 3
      </div>
    </sdds-inline-tabs>
`);
};

export const Default = Template.bind({});
Default.args = {};
