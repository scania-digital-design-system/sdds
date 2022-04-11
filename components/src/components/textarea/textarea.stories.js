import readme from './readme.md';

export default {
  title: 'Component/Textarea',
  parameters: {
    notes: readme,
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
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
        options: ['none', 'success', 'error'],
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    state: 'default',
    label: '',
    labelPosition: 'no-label',
    helper: '',
    textcounter: 0,
    rows: 5,
  },
};

const textfieldTemplate = ({
  placeholder,
  disabled,
  label,
  labelPosition,
  state,
  helper,
  textcounter,
  rows,
}) => {
  const maxlength = textcounter > 0 ? `maxlength="${textcounter}"` : '';
  return `
  <div class="sdds-storybook-wrapper">
        <sdds-textarea
          rows="${rows}"
          state="${state}"
          label="${label}"
          helper="${helper}"
          label-position="${labelPosition}"
          ${disabled ? 'disabled' : ''}
          placeholder="${placeholder}"
          ${maxlength}>
        </sdds-textarea>
  </div>
  `;
};

export const Basic = textfieldTemplate.bind({});

Basic.args = {};

export const Disabled = textfieldTemplate.bind({});

Disabled.args = {
  disabled: true,
  placeholderText: 'Disabled',
};

export const labelInside = textfieldTemplate.bind({});

labelInside.args = {
  label: 'Label text',
  labelPosition: 'inside',
};

export const labelOutside = textfieldTemplate.bind({});

labelOutside.args = {
  label: 'Label text',
  labelPosition: 'outside',
};

export const helper = textfieldTemplate.bind({});

helper.args = {
  helper: 'Helper text',
  label: 'Label text',
};

export const state = textfieldTemplate.bind({});

state.args = {
  state: 'error',
  helper: 'Helper message',
  label: 'Label text',
};

export const textCounter = textfieldTemplate.bind({});

textCounter.args = {
  textcounter: 10,
};
