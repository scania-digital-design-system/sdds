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
        .sdds-u-m0 {
            margin: 0 !important;
          }
          
          .sdds-u-mt0 {
            margin-top: 0 !important;
          }
          
          .sdds-u-mr0 {
            margin-right: 0 !important;
          }
          
          .sdds-u-mb0 {
            margin-bottom: 0 !important;
          }
          
          .sdds-u-ml0 {
            margin-left: 0 !important;
          }
          
          .sdds-u-m1 {
            margin: 8px !important;
          }
          
          .sdds-u-mt1 {
            margin-top: 8px !important;
          }
          
          .sdds-u-mr1 {
            margin-right: 8px !important;
          }
          
          .sdds-u-mb1 {
            margin-bottom: 8px !important;
          }
          
          .sdds-u-ml1 {
            margin-left: 8px !important;
          }
          
          .sdds-u-m2 {
            margin: 16px !important;
          }
          
          .sdds-u-mt2 {
            margin-top: 16px !important;
          }
          
          .sdds-u-mr2 {
            margin-right: 16px !important;
          }
          
          .sdds-u-mb2 {
            margin-bottom: 16px !important;
          }
          
          .sdds-u-ml2 {
            margin-left: 16px !important;
          }
          
          .sdds-u-m3 {
            margin: 24px !important;
          }
          
          .sdds-u-mt3 {
            margin-top: 24px !important;
          }
          
          .sdds-u-mr3 {
            margin-right: 24px !important;
          }
          
          .sdds-u-mb3 {
            margin-bottom: 24px !important;
          }
          
          .sdds-u-ml3 {
            margin-left: 24px !important;
          }
          
          .sdds-u-m-auto {
            margin: auto !important;
          }
          
          .sdds-u-mt-auto {
            margin-top: auto !important;
          }
          
          .sdds-u-mr-auto {
            margin-right: auto !important;
          }
          
          .sdds-u-ml-auto {
            margin-left: auto !important;
          }
          
          .sdds-u-mb-auto {
            margin-bottom: auto !important;
          }
        </style>`,
  );

export const Margin = Template.bind({});
