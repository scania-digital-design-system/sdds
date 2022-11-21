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
        
          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper div {
            background-color: var(--sdds-blue-400);
            margin: 5px 0;
            width: 150px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>

        <div class="demo-wrapper">
          <div class="sdds-u-m0">
            sdds-u-m0
          </div>
          <div class="sdds-u-mt0">
            sdds-u-mt0
          </div>
          <div class="sdds-umpr0">
            sdds-u-mr0
          </div>
          <div class="sdds-u-mb0">
            sdds-u-mb0
          </div>
          <div class="sdds-u-ml0">
            sdds-u-ml0
          </div>

          <div class="sdds-u-m1">
            sdds-u-m1
          </div>
          <div class="sdds-u-mt1">
            sdds-u-mt1
          </div>
          <div class="sdds-u-mr1">
            sdds-u-mr1
          </div>
          <div class="sdds-u-mb1">
            sdds-u-mb1
          </div>
          <div class="sdds-u-ml1">
            sdds-u-ml1
          </div>

          <div class="sdds-u-m2">
            sdds-u-m2
          </div>
          <div class="sdds-u-mt2">
            sdds-u-mt2
          </div>
          <div class="sdds-u-mr2">
            sdds-u-mr2
          </div>
          <div class="sdds-u-mb2">
            sdds-u-mb2
          </div>
          <div class="sdds-u-ml2">
            sdds-u-ml2
          </div>
          <div class="sdds-u-m3">
            sdds-u-m3
          </div>
          <div class="sdds-u-mt3">
            sdds-u-mt3
          </div>
          <div class="sdds-u-mr3">
            sdds-u-mr3
          </div>
          <div class="sdds-u-mb3">
            sdds-u-mb3
          </div>
          <div class="sdds-u-ml3">
            sdds-u-ml3
          </div>
          
        </div>
        
        
          `,
  );

export const Margin = Template.bind({});
