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
        .sdds-u-textalign-start {
            text-align: start !important;
          }
          
          .sdds-u-textalign-center {
            text-align: center !important;
          }
          
          .sdds-u-textalign-end {
            text-align: end !important;
          }
        </style>`,
  );

export const TextAlignment = Template.bind({});
