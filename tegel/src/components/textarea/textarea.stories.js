import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textarea',
  parameters: {
    notes: readme,
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
      defaultValue: 'Placeholder',
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    readonly: {
      description: 'Set textfield to disabled state',
      name: 'Read only',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    label: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    labelPosition: {
      description: 'Label can be placed inside the textfield',
      name: 'Label position',
      control: {
        type: 'radio',
        options: { 'No label': 'no-label', 'Inside': 'inside', 'Outside': 'outside' },
      },
      defaultValue: 'no-label',
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    textcounter: {
      name: 'Text counter',
      description: 'Set a maximum value how long the text can be',
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    rows: {
      name: 'Rows',
      description: 'Set the number of rows',
      control: {
        type: 'number',
      },
      defaultValue: 5,
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
        options: { None: 'none', Success: 'success', Error: 'error' },
      },
      defaultValue: 'none',
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the textarea',
      control: {
        type: 'radio',
        options: { 'On light': 'on-light', 'On dark': 'on-dark' },
      },
      defaultValue: 'on-light',
    },
  },
};

const Template = ({ placeholder, disabled, readonly, label, labelPosition, state, helper, textcounter, rows, variant }) => {
  const maxlength = textcounter > 0 ? `maxlength="${textcounter}"` : '';

  return formatHtmlPreview(`
  <style>
    .demo-wrapper {
      width: 400px;
    }
  </style>
  <div class="demo-wrapper">
        <sdds-textarea
          rows="${rows}"
          state="${state}"
          label="${label}"
          variant="${variant}"
          helper="${helper}"
          label-position="${labelPosition}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'readonly' : ''}
          placeholder="${placeholder}"
          ${maxlength}>
        </sdds-textarea>
  </div>
  `);
};

export const Default = Template.bind({});

Default.args = {};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  placeholderText: 'Disabled',
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  readonly: true,
  placeholderText: 'Read only',
};

export const LabelInside = Template.bind({});

LabelInside.args = {
  label: 'Label text',
  labelPosition: 'Inside',
};

export const LabelOutside = Template.bind({});

LabelOutside.args = {
  label: 'Label text',
  labelPosition: 'Outside',
};

export const Helper = Template.bind({});

Helper.args = {
  helper: 'Helper text',
  label: 'Label text',
};

export const State = Template.bind({});

State.args = {
  state: 'error',
  helper: 'Helper message',
  label: 'Label text',
};

export const TextCounter = Template.bind({});

TextCounter.args = {
  textcounter: 10,
};
