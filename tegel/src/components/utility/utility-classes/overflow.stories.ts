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
        .sdds-u-overflow-auto {
            overflow: auto !important;
          }
          
          .sdds-u-overflow-scroll {
            overflow: scroll !important;
          }
          
          .sdds-u-overflow-hidden {
            overflow: hidden !important;
          }
          
          .sdds-u-overflow-auto {
            overflow: visible !important;
          }
        </style>`,
  );

export const Overflow = Template.bind({});
