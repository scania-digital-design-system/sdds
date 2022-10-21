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
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      description: 'Set textfield to disabled state',
      name: 'Read only',
      control: {
        type: 'boolean',
      },
    },
    label: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
    },
    labelPosition: {
      description: 'Label can be placed inside the textfield',
      name: 'Label position',
      control: {
        type: 'radio',
        options: ['no-label', 'inside', 'outside'],
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
    },
    textcounter: {
      name: 'Text counter',
      description: 'Set a maximum value how long the text can be',
      control: {
        type: 'number',
      },
    },
    rows: {
      name: 'Rows',
      description: 'Set the number of rows',
      control: {
        type: 'number',
      },
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
        options: ['none', 'success', 'error'],
      },
      defaultValue: 'none',
    },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    readonly: false,
    state: 'none',
    label: '',
    labelPosition: 'no-label',
    helper: '',
    textcounter: 0,
    rows: 5,
  },
};

const Template = ({ placeholder, disabled, readonly, label, labelPosition, state, helper, textcounter, rows }) => {
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
  labelPosition: 'inside',
};

export const LabelOutside = Template.bind({});

LabelOutside.args = {
  label: 'Label text',
  labelPosition: 'outside',
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
