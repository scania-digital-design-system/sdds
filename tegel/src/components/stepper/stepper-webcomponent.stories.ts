import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Stepper',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10508%3A32221&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10508%3A32221&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    direction: {
      name: 'Direction',
      description: 'The direction which the stepper is displayed.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical'],
    },
    textPosition: {
      name: 'Text position',
      description: 'The position of the text, only available when the direction is horizontal.',
      control: {
        type: 'radio',
      },
      options: ['Below', 'Aside'],
      if: { arg: 'direction', neq: 'Vertical' },
    },
    size: {
      name: 'Size',
      description: 'The size of the stepper.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Small'],
    },
    showLabels: {
      name: 'Show/Hide labels',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    direction: 'Horizontal',
    textPosition: 'Below',
    showLabels: true,
    size: 'Large',
  },
};

const sizeLookUp = {
  Large: 'lg',
  Small: 'sm',
};
const Template = ({ direction, textPosition, size, showLabels }) =>
  formatHtmlPreview(
    `
        <sdds-stepper size="${sizeLookUp[size]}" ${
      textPosition ? `text-position="${textPosition.toLowerCase()}"` : ''
    } direction="${direction.toLowerCase()}">
            <sdds-stepper-item state="success" ${
              showLabels ? `label-text="Step label"` : ''
            }></sdds-stepper-item>
            <sdds-stepper-item number="2" ${
              showLabels ? `label-text="Step label"` : ''
            }></sdds-stepper-item>
            <sdds-stepper-item number="3" state="inactive" ${
              showLabels ? `label-text="Step label"` : ''
            }></sdds-stepper-item>
            <sdds-stepper-item number="4" state="error" ${
              showLabels ? `label-text="Step label"` : ''
            }></sdds-stepper-item>
        </sdds-stepper>
        `,
  );

export const WebComponents = Template.bind({});
WebComponents.args = {};
