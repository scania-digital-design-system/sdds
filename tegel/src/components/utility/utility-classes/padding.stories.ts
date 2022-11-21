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


          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper div {
            background-color: var(--sdds-blue-400);
            margin: 5px 0;
            width: 150px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>

        <div class="demo-wrapper">
          <div class="sdds-u-p0">
            sdds-u-p0
          </div>
          <div class="sdds-u-pt0">
            sdds-u-pt0
          </div>
          <div class="sdds-u-pr0">
            sdds-u-pr0
          </div>
          <div class="sdds-u-pb0">
            sdds-u-pb0
          </div>
          <div class="sdds-u-pl0">
            sdds-u-pl0
          </div>

          <div class="sdds-u-p1">
            sdds-u-p1
          </div>
          <div class="sdds-u-pt1">
            sdds-u-pt1
          </div>
          <div class="sdds-u-pr1">
            sdds-u-pr1
          </div>
          <div class="sdds-u-pb1">
            sdds-u-pb1
          </div>
          <div class="sdds-u-pl1">
            sdds-u-pl1
          </div>

          <div class="sdds-u-p2">
            sdds-u-p2
          </div>
          <div class="sdds-u-pt2">
            sdds-u-pt2
          </div>
          <div class="sdds-u-pr2">
            sdds-u-pr2
          </div>
          <div class="sdds-u-pb2">
            sdds-u-pb2
          </div>
          <div class="sdds-u-pl2">
            sdds-u-pl2
          </div>

          <div class="sdds-u-p3">
            sdds-u-p3
          </div>
          <div class="sdds-u-pt3">
            sdds-u-pt3
          </div>
          <div class="sdds-u-pr3">
            sdds-u-pr3
          </div>
          <div class="sdds-u-pb3">
            sdds-u-pb3
          </div>
          <div class="sdds-u-pl3">
            sdds-u-pl3
          </div>
          
        </div>
        
        `,
  );

export const Padding = Template.bind({});
