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

        /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper div {
            background-color: var(--sdds-blue-400);
            padding: 40px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>
        
        <div class="demo-wrapper"> 
          
          <div class="sdds-u-opacity-100">
            sdds-u-opacity-100
          </div>

          <div class="sdds-u-opacity-75">
            sdds-u-opacity-75
          </div>

          <div class="sdds-u-opacity-50">
            sdds-u-opacity-50
          </div>
          
          <div class="sdds-u-opacity-25">
            sdds-u-opacity-25
          </div>

        </div>
        `,
  );

export const Opacity = Template.bind({});
