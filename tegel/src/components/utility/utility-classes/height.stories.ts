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
        .sdds-u-h-auto {
            height: auto !important;
          }
          
          .sdds-u-h-100 {
            height: 100% !important;
          }
          
          .sdds-u-h-75 {
            height: 75% !important;
          }
          
          .sdds-u-h-50 {
            height: 50% !important;
          }
          
          .sdds-u-h-25 {
            height: 25% !important;
          }

          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper {
            width: 100%;
            height: 300px;
            display: flex;
            align-items: end;

          }
          .demo-class {
            background-color: var(--sdds-blue-400);
            margin: 0 10px;
            padding: 10px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>
        <div class="demo-wrapper">
        <div class="sdds-u-h-auto demo-class">
        sdds-u-h-auto
        </div>

        <div class="sdds-u-h-100 demo-class">
        sdds-u-h-100
        </div>

        <div class="sdds-u-h-75 demo-class">
        sdds-u-h-75
        </div>

        <div class="sdds-u-h-50 demo-class">
        sdds-u-h-50
        </div>

        <div class="sdds-u-h-25 demo-class">
        sdds-u-h-25
        </div>
        </div>
        
        
        `,
  );

export const Height = Template.bind({});
