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
        .sdds-u-textalign-start {
            text-align: start !important;
          }
          
          .sdds-u-textalign-center {
            text-align: center !important;
          }
          
          .sdds-u-textalign-end {
            text-align: end !important;
          }
          

          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper {
            background-color: var(--sdds-blue-400);
            color: var(--sdds-white);
            width: 100%;
            padding: 10px 0;
            margin: 10px 0;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>

        <div class="demo-wrapper">
          <div class="sdds-u-textalign-start">
          sdds-u-textalign-start
          </div>
        </div>

        <div class="demo-wrapper">
          <div class="sdds-u-textalign-center">
          sdds-u-textalign-center
          </div>
        </div>
        
        <div class="demo-wrapper">
          <div class="sdds-u-textalign-end">
          sdds-u-textalign-end
          </div>
        </div>
        
        
        `,
  );

export const TextAlignment = Template.bind({});
