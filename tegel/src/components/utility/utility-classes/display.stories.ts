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
          .sdds-u-flex {
            display: flex !important;
          }
          
          .sdds-u-inline-flex {
            display: inline-flex;
          }
          
          .sdds-u-block {
            display: block !important;
          }
          
          .sdds-u-inline-block {
            display: inline-block !important;
          }
          
          .sdds-u-grid {
            display: grid !important;
          }
          
          .sdds-u-display-none {
            display: none !important;
          }
        </style>`,
  );

export const Display = Template.bind({});
