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
        .sdds-u-visibility-hidden {
          visibility: hidden !important;
        }
        
        .sdds-u-visibility-visible {
          visibility: visible !important;
        }

        /* CLASSES FOR DEMO PURPOSES */

        .demo-wrapper {
            width: 200px;
          display: flex;
          justify-content: space-between;
        }

        .demo-class {
          background-color: var(--sdds-blue-400);
          height: 50px;
          width: 50px;
        }

        /* CLASSES FOR DEMO PURPOSES */
        </style>
        
        <div class="demo-wrapper">
            <div>
                Hidden
                    <div class="sdds-u-visibility-hidden demo-class">
                    </div>
            </div>
            <div>
                Visible
                    <div class="sdds-u-visibility-visible demo-class">
                    </div>
            </div>
        </div>
        
        `,
  );

export const Visibility = Template.bind({});
