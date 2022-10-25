import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Components/Tabs/Inline Tabs',
  parameters: {},
  argTypes: {
    autoHeight: {
      name: 'Same height',
      description: 'Make all tab panels as tall as the tallest tab panel',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ autoHeight = false }) =>
  formatHtmlPreview(`
  <style>
    /* .demo-wrapper is only added here for demonstration purposes. */
    .demo-wrapper {
      font-size: 14px;
    }
  </style>

  <div class="demo-wrapper">

    <sdds-inline-tabs ${autoHeight ? 'auto-height' : ''}>
      <div name="Tab very long name">
        Tab panel 1
        <div style="width:200px; height:200px; background: linear-gradient(125deg,rgba(255, 0, 0, 1) 0%,rgba(255, 255, 0, 1) 33%,rgba(0, 192, 255, 1) 66%,rgba(192, 0, 255, 1) 100%);"></div>
      </div>

      <div name="Tab 2" default>
        Tab panel 2
      </div>

    </sdds-inline-tabs>
  </div>
`);

export const Default = Template.bind({});
Default.args = {};
