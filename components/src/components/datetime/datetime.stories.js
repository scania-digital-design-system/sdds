import readme from './readme.md';

export default {
  title: 'Component/Datetime',
  parameters: {
    notes: readme,
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['datetime-local', 'date', 'time'],
      },
    },
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        options: ['Default', 'Medium', 'Small'],
      },
    },
    minWidth: {
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'radio',
        options: ['Default', 'No min width'],
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
    minValue: {
      description:
        'Sets min value. Example for different types: datetime="2023-01-31T00:00" date="2023-01-01" time="15:00"',
      name: 'Min value',
      control: {
        type: 'text',
      },
    },
    maxValue: {
      description:
        'Sets max value. Example for different types: datetime="2023-01-31T00:00" date="2023-01-01" time="15:00"',
      name: 'Max value',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
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
    type: 'datetime-local',
    size: 'Default',
    minWidth: 'Default',
    disabled: false,
    state: 'none',
    minValue: '2023-01-01T00:00',
    maxValue: '2024-12-31T00:00',
    label: '',
    helper: '',
  },
};

const datetimeTemplate = ({
  type,
  size,
  minWidth,
  disabled,
  label,
  minValue,
  maxValue,
  state,
  helper,
}) => {
  let sizeValue;
  switch (size) {
    case 'Small':
      sizeValue = 'sm';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    case 'Default':
      sizeValue = 'default';
      break;
    default:
      break;
  }
  let minWidthValue = false;
  switch (minWidth) {
    case 'No min width':
      minWidthValue = true;
      break;
    default:
      break;
  }

  return `
  <div style="width: 208px">
    <sdds-datetime
      type="${type}"
      size="${sizeValue}"
      state="${state}"
      min="${minValue}"
      max="${maxValue}"
      ${disabled ? 'disabled' : ''}
      ${minWidthValue ? 'noMinWidth' : ''} >
      ${label ? `<label slot='sdds-label'>${label}</label>` : ''}
      ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
   
    </sdds-datetime>
  </div>
  `;
};

export const Basic = datetimeTemplate.bind({});

Basic.args = {};

export const Disabled = datetimeTemplate.bind({});

Disabled.args = {
  disabled: true,
  placeholderText: 'Disabled',
};

export const Labels = datetimeTemplate.bind({});

Labels.args = {
  label: 'Label text',
};

export const Helper = datetimeTemplate.bind({});

Helper.args = {
  helper: 'Helper text',
  label: 'Label text',
};

export const State = datetimeTemplate.bind({});

State.args = {
  state: 'error',
  helper: 'Helper text',
  label: 'Label text',
};
