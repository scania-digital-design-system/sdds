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
        .sdds-u-z10 {
            z-index: 10 !important;
          }
          
        .sdds-u-z100 {
            z-index: 100 !important;
          }
          
        .sdds-u-z500 {
            z-index: 500 !important;
          }
          
        .sdds-u-z1000 {
            z-index: 1000 !important;
          }


          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper {
            postition: relative;
            height: 400px;
          }
          .demo-class-10 {
            background-color: var(--sdds-blue-400);
            padding: 40px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .demo-class-100 {
            background-color: var(--sdds-red-400);
            padding: 40px;
            position: absolute;
            top: 60px;
            left: 60px;
          }
          .demo-class-500 {
            background-color: var(--sdds-grey-400);
            padding: 40px;
            position: absolute;
            top: 120px;
            left: 120px;
          }
          .demo-class-1000 {
            background-color: var(--sdds-black);
            color: var(--sdds-white);
            padding: 40px;
            position: absolute;
            top: 180px;
            left: 180px;
          }

          /* CLASSES FOR DEMO PURPOSES */
        </style>
        <div class="demo-wrapper">
          <div class="sdds-u-z10 demo-class-10"> sdds-u-z10 </div>
          <div class="sdds-u-z100 demo-class-100"> sdds-u-z100 </div>
          <div class="sdds-u-z500 demo-class-500"> sdds-u-z500 </div>
          <div class="sdds-u-z1000 demo-class-1000"> sdds-u-z1000 </div>
        </div>`,
  );

export const ZIndex = Template.bind({});
