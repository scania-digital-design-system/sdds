import CardImage from '../../stories/assets/image/card-img.png';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Card',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'The variant of the card',
      defaultValue: 'primary',
      control: {
        type: 'radio',
        options: { Primary: 'primary', Secondary: 'secondary' },
      },
    },
    headline: {
      name: 'Header text',
      description: 'The header text',
      defaultValue: 'Header text',
      control: {
        type: 'text',
      },
    },
    subheadline: {
      name: 'Subheader text',
      description: 'The subheader text',
      defaultValue: 'Subheader text',
      control: {
        type: 'text',
      },
    },
    footer: {
      name: 'Footer',
      description: 'The footer of the card',
      // TODO - Is dependant on font component
      defaultValue: '<sdds-icon style="font-size: 20px;" name="scania-arrow"></sdds-icon>',
      control: {
        type: 'text',
      },
    },
    clickable: {
      name: 'Clickable',
      description: 'Toggles if the card is clickable or not.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const CardTemplate = ({ headline, subheadline, footer, clickable, text, divider, imageTop, variant }) =>
  formatHtmlPreview(
    `
<style> 
  .demo-wrapper {
    width: 300px;
  }
</style>
    <div class="demo-wrapper">
          <div class="
          sdds-card${clickable ? ' sdds-clickable' : ''}
          sdds-card-${variant}
          ">
            ${imageTop == true ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
            <div class="sdds-card-header">
              ${headline ? `<h6 class="sdds-card-headline">${headline}</h6>` : ''}
              ${subheadline ? `<h6 class="sdds-card-sub-headline" >${subheadline}</h6>` : ''}
            </div>
            ${imageTop == false ? `<img class="sdds-card-img" src="${CardImage}" />` : ''}
            ${divider ? '<div class="sdds-divider-light-border-top"></div>' : ''}
            ${text ? `<div class="sdds-card-body">${text}</div>` : ''}
            ${footer ? `<div class="sdds-card-footer">${footer}</div>` : ''}
          </div>
    </div>
  `,
  );

export const Default = CardTemplate.bind({});

Default.args = {};
