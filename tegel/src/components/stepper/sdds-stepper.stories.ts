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
    direction: {
      name: 'Direction',
      description: 'The direction which the stepper is displayed.',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'horizontal' },
      },
      options: ['Horizontal', 'Vertical'],
    },
    labelPosition: {
      name: 'Text position',
      description: 'The position of the text, only available when the direction is horizontal.',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'below' },
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
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['Large', 'Small'],
    },
    hideLabels: {
      name: 'Hide labels',
      description: 'Hides the labels for all stepper items.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    direction: 'Horizontal',
    labelPosition: 'Below',
    hideLabels: false,
    size: 'Large',
  },
};

const sizeLookUp = {
  Large: 'lg',
  Small: 'sm',
};
const Template = ({ size, hideLabels, labelPosition, direction }) =>
  formatHtmlPreview(
    `<sdds-stepper ${hideLabels ? 'hide-labels' : ''} size="${sizeLookUp[size]}" ${
      direction === 'Horizontal' ? `label-position="${labelPosition?.toLowerCase()}"` : ''
    } direction="${direction.toLowerCase()}">
    <sdds-stepper-item state="success" label-text="Step label">1</sdds-stepper-item>
    <sdds-stepper-item state="active" label-text="Step label">2</sdds-stepper-item>
    <sdds-stepper-item label-text="Step inactive with text">3</sdds-stepper-item>
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
  <sdds-stepper-item label-text="Step inactive with text">3</sdds-stepper-item>
  <sdds-stepper-item label-text="Step label">4</sdds-stepper-item>
</sdds-stepper>
      `,
  );
export const WebComponentWithError = TemplateWithError.bind({});
