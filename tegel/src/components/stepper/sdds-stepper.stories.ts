import { formatHtmlPreview } from '../../utils/utils';
import readmeStepper from './readme.md';
import readmeStepperItem from './stepper-item/readme.md';

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
    notes: { 'Stepper': readmeStepper, 'Stepper Item': readmeStepperItem },
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Sets the size of the stepper.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    direction: {
      name: 'Direction',
      description: 'Sets the direction which the stepper is displayed.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    labelPosition: {
      name: 'Text position',
      description:
        'Sets the position of the text, only available when the direction is horizontal.',
      control: {
        type: 'radio',
      },
      options: ['Below', 'Aside'],
      if: { arg: 'direction', neq: 'Vertical' },
      table: {
        defaultValue: { summary: 'below' },
      },
    },
    hideLabels: {
      name: 'Hide labels',
      description: 'Hides the labels for all stepper items.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    size: 'Large',
    direction: 'Horizontal',
    labelPosition: 'Below',
    hideLabels: false,
  },
};

const sizeLookUp = {
  Large: 'lg',
  Small: 'sm',
};
const Template = ({ size, direction, labelPosition, hideLabels }) =>
  formatHtmlPreview(
    `<sdds-stepper ${hideLabels ? 'hide-labels' : ''} size="${sizeLookUp[size]}" ${
      direction === 'Horizontal' ? `label-position="${labelPosition?.toLowerCase()}"` : ''
    } direction="${direction.toLowerCase()}">
    <sdds-stepper-item state="success" label-text="Step label">1</sdds-stepper-item>
    <sdds-stepper-item state="current" label-text="Current step">3</sdds-stepper-item>
    <sdds-stepper-item label-text="Step label">3</sdds-stepper-item>
    <sdds-stepper-item label-text="Step label">4</sdds-stepper-item>
  </sdds-stepper>
        `,
  );
export const WebComponent = Template.bind({});

const TemplateWithError = ({ size, hideLabels, labelPosition, direction }) =>
  formatHtmlPreview(
    `<sdds-stepper ${hideLabels ? 'hide-labels' : ''} size="${sizeLookUp[size]}" ${
      direction === 'Horizontal' ? `label-position="${labelPosition?.toLowerCase()}"` : ''
    } direction="${direction.toLowerCase()}">
  <sdds-stepper-item state="success" label-text="Step label">1</sdds-stepper-item>
  <sdds-stepper-item state="error" label-text="Step label">2</sdds-stepper-item>
  <sdds-stepper-item state="current" label-text="Current step">3</sdds-stepper-item>
  <sdds-stepper-item label-text="Step label">4</sdds-stepper-item>
</sdds-stepper>
      `,
  );
export const WebComponentWithError = TemplateWithError.bind({});
