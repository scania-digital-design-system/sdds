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
        .sdds-u-h-auto {
            height: auto !important;
          }
          
          .sdds-u-h-100 {
            height: 100% !important;
          }
          
          .sdds-u-h-75 {
            height: 75% !important;
          }
          
          .sdds-u-h-50 {
            height: 50% !important;
          }
          
          .sdds-u-h-25 {
            height: 25% !important;
          }
        </style>`,
  );

export const Height = Template.bind({});
