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
        .sdds-u-sticky {
            position: sticky !important;
          }
          
        .sdds-u-static {
            position: static !important;
          }
          
        .sdds-u-relative {
            position: relative !important;
          }
          
        .sdds-u-absolute {
            position: absolute !important;
          }
          
        .sdds-u-fixed {
            position: fixed !important;
          }
        </style>`,
  );

export const Position = Template.bind({});
