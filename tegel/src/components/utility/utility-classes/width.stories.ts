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
        .sdds-u-w-auto {
            width: auto !important;
          }
          
        .sdds-u-w-100 {
            width: 100% !important;
          }
          
        .sdds-u-w-75 {
            width: 75% !important;
          }
          
        .sdds-u-w-50 {
            width: 50% !important;
          }
          
        .sdds-u-w-25 {
            width: 25% !important;
          }
        </style>`,
  );

export const Width = Template.bind({});
