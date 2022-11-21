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
        .sdds-u-top0 {
            top: 0 !important;
          }
          
        .sdds-u-right0 {
            right: 0 !important;
          }
          
        .sdds-u-bottom0 {
            bottom: 0 !important;
          }
          
        .sdds-u-left0 {
            left: 0 !important;
          }
        </style>`,
  );

export const Placement = Template.bind({});
