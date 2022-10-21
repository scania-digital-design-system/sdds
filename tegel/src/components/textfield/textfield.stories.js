import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textfield',
  parameters: {
    notes: readme,
    layout: 'centered',
  },
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
    },
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['password', 'text'],
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
    readonly: {
      description: 'Set textfield to read only',
      name: 'Read Only',
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
      defaultValue: 'none',
    },
  },
  args: {
    placeholderText: 'Placeholder',
    type: 'text',
    size: 'Default',
    minWidth: 'Default',
    disabled: false,
    readonly: false,
    state: 'none',
    label: '',
    labelplacement: false,
    textcounter: 0,
    helper: '',
  },
};

const Template = ({ type, placeholderText, size, minWidth, disabled, readonly, label, labelplacement, state, helper, prefix, suffix, icon, textcounter }) => {
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
  const maxlength = textcounter > 0 ? `maxlength="${textcounter}"` : '';

  return formatHtmlPreview(
    `
  <div style="width: 208px">
    <sdds-textfield
      type="${type}"
      size="${sizeValue}"
      state="${state}"
      ${maxlength}
      ${label && labelplacement ? `label-inside="${label}"` : ''}
      ${disabled ? 'disabled' : ''}
      ${readonly ? 'readonly' : ''}
      ${minWidthValue ? 'noMinWidth' : ''}
      placeholder="${placeholderText}" >
        ${prefix ? `${prefix}` : ''}
        ${label && !labelplacement ? `<label slot='sdds-label'>${label}</label>` : ''}
        ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
        ${suffix ? `${suffix}` : ''}
        ${icon ? `${icon}` : ''}
    </sdds-textfield>
  </div>
  `,
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  placeholderText: 'Disabled',
};

export const Labels = Template.bind({});

Labels.args = {
  label: 'Label text',
};

export const Helper = Template.bind({});

Helper.args = {
  helper: 'Helper text',
  label: 'Label text',
};

export const State = Template.bind({});

State.args = {
  state: 'error',
  helper: 'Helper text',
  label: 'Label text',
};

export const Prefix = Template.bind({});

Prefix.argTypes = {
  prefix: {
    name: 'Prefix',
    description: 'Add prefix symbol/text before the textfield',
    control: {
      type: 'text',
    },
  },
};

Prefix.args = {
  helper: '',
  label: 'Label text',
  prefix: '<span slot="sdds-prefix">$</span>',
};

export const Suffix = Template.bind({});

Suffix.argTypes = {
  suffix: {
    name: 'Suffix',
    description: 'Add suffix symbol/text after the textfield',
    control: {
      type: 'text',
    },
  },
};

Suffix.args = {
  helper: '',
  label: 'Label text',
  suffix: '<span slot="sdds-suffix">$</span>',
};

// TODO - Dependant on icon component
export const Icon = Template.bind({});

Icon.argTypes = {
  icon: {
    name: 'Icon',
    description: 'Add icon before or after the textfield',
    control: {
      type: 'text',
    },
  },
};

Icon.args = {
  helper: '',
  label: 'Label text',
  icon: '<sdds-icon name="scania-cross" slot="sdds-prefix"></sdds-icon>',
};
