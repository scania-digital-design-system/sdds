import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Tabs/Inline Tabs',
  parameters: {
    // layout: 'fullscreen',
    notes: readme,
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
  },
};
// .demo-wrapper {
//   padding: 30px 20px;
//   font-size: 14px;
//   background-color: ${altBgColor ? getComputedStyle(document.documentElement).getPropertyValue('--sdds-grey-50') : 'white'};
// }
// .sdds-theme-dark .demo-wrapper {
//   color: white;
//   background-color: ${
//     altBgColor ? getComputedStyle(document.documentElement).getPropertyValue('--sdds-grey-958') : getComputedStyle(document.documentElement).getPropertyValue('--sdds-grey-900')
//   };
// }
// eslint-disable-next-line arrow-body-style
const Template = ({ autoHeight = false, altBgColor = false }) => {
  // TODO: change background color of stories globally with dark theme plugin instead
  return formatHtmlPreview(`
  <style>
    /* .demo-wrapper is only added here for demonstration purposes. */
    .demo-wrapper {
      font-size: 14px;
    }
  </style>

  <div class="demo-wrapper">

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
  </div>
`);
};

export const Default = Template.bind({});
Default.args = {};
