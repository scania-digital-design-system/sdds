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
        .sdds-u-visibility-hidden {
          visibility: hidden !important;
        }
        
        .sdds-u-visibility-visible {
          visibility: visible !important;
        }
        </style>`,
  );

export const Visibility = Template.bind({});
