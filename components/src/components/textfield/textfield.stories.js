export default {
  title: 'Component/TextField',
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'Type',
      control: {
      type: 'select',
      options: [
        'password',
        'text'
      ],
     },
    },
    size: {
      name: 'Size',
      description:'Switch between different sizes',
      control: {
        type: 'select',
        options: [
          'Default',
          'Medium'
        ],
      }
    },
    label: {
      name: 'Label text',
      control: {
        type: 'text'
      }
    },
    labelplacement: {
      name: 'Label inside',
      control: {
        type: 'boolean'
      }
    },
    state: {
      name: 'State',
      description:'Switch success or error state',
      control: {
        type: 'select',
        options: [
          'none',
          'success',
          'error'
        ]
      }
    }
  },
  args: {
    placeholderText: 'Placeholder',
    type: 'text',
    size: 'Default',
    state: 'default'
  }
};

const style =`<style>

.demo {
  margin-top: 20px;
}
</style>`;

const textfieldTemplate = ({type, placeholderText,size,disabled,label,labelplacement,state,helper, prefix, suffix}) => {
  let sizeValue;
  switch (size) {
    case 'Medium':
      sizeValue = 'md'
      break;
  case 'Default':
      sizeValue = 'default'
      break;
    default:
      break;
  }

  return `
  ${style}
  <c-theme></c-theme>
  <div class="demo">
    <sdds-textfield
      type="${type}"
      size="${sizeValue}"
      state="${state}"
      ${label && !labelplacement ? `labelinside="${label}"` : ''}
      ${disabled ? 'disabled' : ''}
      placeholder="${placeholderText}" >
        ${prefix}
        ${label && labelplacement ? `<label slot='sdds-label'>${label}</label>` : ''}
        ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
        ${suffix}
    </sdds-textfield>
  </div>
  `
};

export const Basic = textfieldTemplate.bind({});

Basic.args = {
  type: 'text'
}

export const Disabled = textfieldTemplate.bind({});

Disabled.args = {
  disabled: true,
  placeholderText: 'Disabled'
}

export const labels = textfieldTemplate.bind({});

labels.args = {
  disabled: false,
  label: 'Label text',
  labelplacement: true
};

export const state = textfieldTemplate.bind({});

state.args = {
  state: 'error',
  disabled: false,
  helper: 'Helper text',
  label: 'Label text',
  labelplacement: true
};


export const helper = textfieldTemplate.bind({});

helper.args = {
  disabled: false,
  helper: 'Helper text',
  label: 'Label text',
  labelplacement: true
};


export const prefix = textfieldTemplate.bind({});

prefix.argTypes = {};

prefix.args = {
  disabled: false,
  helper: '',
  label: 'Label text',
  labelplacement: true,
  prefix: '<span slot="sdds-prefix">$</span>',
};


export const suffix = textfieldTemplate.bind({});

suffix.argTypes = {};

suffix.args = {
  disabled: false,
  helper: '',
  label: 'Label text',
  labelplacement: true,
  suffix: '<span slot="sdds-suffix">$</span>',
};

export const icon = textfieldTemplate.bind({});

icon.argTypes = {};

icon.args = {
  disabled: false,
  helper: '',
  label: 'Label text',
  labelplacement: true,
  prefix: '<c-icon name="scania-cross_circle" slot="sdds-prefix"></c-icon>',
};