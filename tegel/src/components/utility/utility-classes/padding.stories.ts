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
        .sdds-u-p0 {
            padding: 0 !important;
          }
          
        .sdds-u-pt0 {
            padding-top: 0 !important;
          }
          
        .sdds-u-pr0 {
            padding-right: 0 !important;
          }
          
        .sdds-u-pb0 {
            padding-bottom: 0 !important;
          }
          
        .sdds-u-pl0 {
            padding-left: 0 !important;
          }
          
        .sdds-u-p1 {
            padding: 8px !important;
          }
          
        .sdds-u-pt1 {
            padding-top: 8px !important;
          }
          
        .sdds-u-pr1 {
            padding-right: 8px !important;
          }
          
        .sdds-u-pb1 {
            padding-bottom: 8px !important;
          }
          
        .sdds-u-pl1 {
            padding-left: 8px !important;
          }
          
        .sdds-u-p2 {
            padding: 16px !important;
          }
          
        .sdds-u-pt2 {
            padding-top: 16px !important;
          }
          
        .sdds-u-pr2 {
            padding-right: 16px !important;
          }
          
        .sdds-u-pb2 {
            padding-bottom: 16px !important;
          }
          
        .sdds-u-pl2 {
            padding-left: 16px !important;
          }
          
        .sdds-u-p3 {
            padding: 24px !important;
          }
          
        .sdds-u-pt3 {
            padding-top: 24px !important;
          }
          
        .sdds-u-pr3 {
            padding-right: 24px !important;
          }
          
        .sdds-u-pb3 {
            padding-bottom: 24px !important;
          }
          
        .sdds-u-pl3 {
            padding-left: 24px !important;
          }
        </style>`,
  );

export const Padding = Template.bind({});
