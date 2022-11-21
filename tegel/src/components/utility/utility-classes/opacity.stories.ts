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
        .sdds-u-opacity-100 {
          opacity: 1 !important;
        }
        
        .sdds-u-opacity-75 {
          opacity: 0.75 !important;
        }
        
        .sdds-u-opacity-50 {
          opacity: 0.5 !important;
        }
        
        .sdds-u-opacity-25 {
          opacity: 0.25 !important;
        }
        
        </style>`,
  );

export const Opacity = Template.bind({});
