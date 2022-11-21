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
        .sdds-u-float-right {
            float: right !important;
          }
          
          .sdds-u-float-left {
            float: left !important;
          }
          
          .sdds-u-float-none {
            float: none !important;
          }
          
           /* CLASSES FOR DEMO PURPOSES */

          .demo-class {
            background-color: var(--sdds-blue-400);
            padding: 30px;
            
          }

          /* CLASSES FOR DEMO PURPOSES */
        
          </style>
          <div class="demo-wrapper">
            <div class="sdds-u-float-right demo-class">
            sdds-u-float-right
            </div>
            <div class="sdds-u-float-left demo-class">
            sdds-u-float-left
            </div>
            <div class="sdds-u-float-none demo-class">
            sdds-u-float-none
            </div>
          </div>
        
        `,
  );

export const Float = Template.bind({});
