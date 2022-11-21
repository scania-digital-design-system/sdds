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
        .sdds-u-overflow-auto {
            overflow: auto !important;
          }
          
          .sdds-u-overflow-scroll {
            overflow: scroll !important;
          }
          
          .sdds-u-overflow-hidden {
            overflow: hidden !important;
          }
          
          .sdds-u-overflow-visible {
            overflow: visible !important;
          }

          /* CLASSES FOR DEMO PURPOSES */

          .demo-wrapper div {
            background-color: var(--sdds-blue-400);
            height: 200px;
            width: 250px;
            margin-bottom: 100px;
          }

          /* CLASSES FOR DEMO PURPOSES */

        </style>
        <div class="demo-wrapper">
        sdds-u-overflow-auto
        <div class="sdds-u-overflow-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        sdds-u-overflow-scroll
        <div class="sdds-u-overflow-scroll">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        sdds-u-overflow-hidden
        <div class="sdds-u-overflow-hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        sdds-u-overflow-visible
        <div class="sdds-u-overflow-visible">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        </div>
        `,
  );

export const Overflow = Template.bind({});
