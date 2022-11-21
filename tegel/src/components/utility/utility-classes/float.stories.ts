import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Utilities/Utility Classes',
  parameters: {
    layout: 'centered',
  },
};

const Template = () =>
  formatHtmlPreview(
    `<style>
        .sdds-u-float-right {
            float: right !important;
          }
          
          .sdds-u-float-left {
            float: left !important;
          }
          
          .sdds-u-float-none {
            float: none !important;
          }
        </style>`,
  );

export const Float = Template.bind({});
