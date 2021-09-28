import readme from './readme.md';

export default {
  title: 'Component/Dropdown',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    notes: readme,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'small', 'medium'],
      },
      defaultValue: 'large',
      description: 'Size of the dropdown',
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Select option',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      type: 'string',
      defaultValue: 'Label text',
      description: 'Label text explains about dropdown',
    },
    labelPosition: {
      control: {
        type: 'select',
        options: ['no-label', 'inside', 'outside'],
      },
      defaultValue: 'no-label',
      description: 'Label text position',
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      defaultValue: 'default',
      description: 'Support error state',
    },
    defaultOption: {
      control: {
        type: 'select',
        options: ['no-default', 'option-1', 'option-2', 'option-3'],
      },
    },
  },
};

const Template = ({
  size,
  type,
  label,
  disabled = false,
  labelPosition,
  helper = '',
  state = 'default',
  placeholder,
  defaultOption,
}) => {
  return `
  <sdds-theme></sdds-theme>
  
  <div class="sdds-container" style="margin-top:10rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">
        <sdds-dropdown 
          size="${size}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosition}"
          label="${label}"
          helper="${helper}"
          state="${state}"
          type="${type}"
          default-option="${defaultOption}">
          <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
    </div>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
};

export const LabelInside = Template.bind({});
LabelInside.args = {
  disabled: false,
  labelPosition: 'inside',
};

export const LabelOutside = Template.bind({});
LabelOutside.args = {
  disabled: false,
  labelPosition: 'outside',
  label: 'Label text',
};

export const Helper = Template.bind({});
Helper.args = {
  helper: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  helper: 'Error message',
};

const FilterTemplate = ({
  size,
  disabled = false,
  helper = '',
  placeholder,
  defaultOption,
}) => {
  return `
    <sdds-theme></sdds-theme>
    <div class="sdds-container" style="margin-top:10rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">
        <sdds-dropdown-filter
        size="${size}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        helper="${helper}"
        default-option="${defaultOption}"
        data='[{"value":"option-1","label":"Jakarta"},{"value":"option-2","label":"Stockholm"},{"value":"option-3","label":"Barcelona"}]'
        ></sdds-dropdown-filter>
      </div>
      </div>
    </div>
  `;
};

export const Filter = FilterTemplate.bind({});
Filter.args = {};
Filter.argTypes = {
  labelPosition: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  state: {
    table: {
      disable: true,
    },
  },
};

const NativeTemplate = ({ size, helper = 'Helper text', label, state }) => {
  return `
  <sdds-theme></sdds-theme>
  <div class="sdds-container" style="margin-top:10rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-4 sdds-col-xlg-4 sdds-col-lg-4 sdds-col-md-4 sdds-col-sm-4">
        <div class="sdds-dropdown ${
          size !== 'large' ? 'sdds-dropdown-' + size : ''
        } ${state === 'error' ? 'is-error' : ''}" >
          <span class="sdds-dropdown-label-outside">${label}</span>
          <select name="nativeDropdown" id="mySelect">
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
          <span class="sdds-dropdown-helper">${helper}</span>
        </div>
        
      </div>
    </div>
  </div>
  `;
};

export const NativeSelect = NativeTemplate.bind({});
NativeSelect.args = {};
NativeSelect.argTypes = {
  labelPosition: {
    table: {
      disable: true,
    },
  },
  placeholder: {
    table: {
      disable: true,
    },
  },
  defaultOption: {
    table: {
      disable: true,
    },
  },
};
