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
        .sdds-u-z10 {
            z-index: 10 !important;
          }
          
        .sdds-u-z100 {
            z-index: 100 !important;
          }
          
        .sdds-u-z500 {
            z-index: 500 !important;
          }
          
        .sdds-u-z1000 {
            z-index: 1000 !important;
          }
        </style>`,
  );

export const ZIndex = Template.bind({});
