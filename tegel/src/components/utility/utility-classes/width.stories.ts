import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Utilities/Utility Classes',
  parameters: {
    layout: 'padded',
  },
};

const Template = () =>
  formatHtmlPreview(
    `<style>
        .sdds-u-w-auto {
            width: auto !important;
          }
          
        .sdds-u-w-100 {
            width: 100% !important;
          }
          
        .sdds-u-w-75 {
            width: 75% !important;
          }
          
        .sdds-u-w-50 {
            width: 50% !important;
          }
          
        .sdds-u-w-25 {
            width: 25% !important;
          }


          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper {
            width: 100%;
          }
          .demo-class {
            background-color: var(--sdds-blue-400);
            margin: 10px 0;
            padding: 10px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>

        <div class="demo-wrapper">
        <div class="sdds-u-w-auto demo-class">
        sdds-u-w-auto
        </div>

        <div class="sdds-u-w-100 demo-class">
        sdds-u-w-100
        </div>

        <div class="sdds-u-w-75 demo-class">
        sdds-u-w-75
        </div>

        <div class="sdds-u-w-50 demo-class">
        sdds-u-w-50
        </div>

        <div class="sdds-u-w-25 demo-class">
        sdds-u-w-25
        </div>
        </div>
        `,
  );

export const Width = Template.bind({});
