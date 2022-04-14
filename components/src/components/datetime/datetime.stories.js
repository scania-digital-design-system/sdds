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
        options: ['Default', 'Medium'],
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
    labelplacement: {
      description: 'Label can be placed inside the textfield',
      name: 'Label inside',
      control: {
        type: 'boolean',
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
    state: 'default',
    label: '',
    labelplacement: false,
    helper: '',
  },
};

const datetimeTemplate = ({
  type,
  size,
  minWidth,
  disabled,
  label,
  labelplacement,
  state,
  helper,
  icon,
  textcounter,
}) => {
  let sizeValue;
  switch (size) {
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
      maxlength="${textcounter}"
      ${label && labelplacement ? `label-inside="${label}"` : ''}
      ${disabled ? 'disabled' : ''}
      ${minWidthValue ? 'noMinWidth' : ''}
        ${
          label && !labelplacement
            ? `<label slot='sdds-label'>${label}</label>`
            : ''
        }
        ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
        ${icon}
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

export const labels = datetimeTemplate.bind({});

labels.args = {
  label: 'Label text',
};

export const helper = datetimeTemplate.bind({});

helper.args = {
  helper: 'Helper text',
  label: 'Label text',
};

export const state = datetimeTemplate.bind({});

state.args = {
  state: 'error',
  helper: 'Helper text',
  label: 'Label text',
};

export const icon = datetimeTemplate.bind({});

icon.argTypes = {
  icon: {
    name: 'Icon',
    description: 'Add icon before or after the textfield',
    control: {
      type: 'text',
    },
  },
};

icon.args = {
  helper: '',
  label: 'Label text',
  icon: '<sdds-icon name="scania-cross" slot="sdds-prefix"></sdds-icon>',
};
