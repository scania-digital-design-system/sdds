import readme from './readme.md';

export default {
  title: 'Component/Dropdown',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['large', 'medium', 'small'],
      },
      defaultValue: 'large',
      description: 'Size of the dropdown',
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      defaultValue: 'Select option',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      name: 'Label',
      type: 'string',
      defaultValue: 'Label text',
      description: 'Label text explains about dropdown',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
        options: ['no-label', 'inside', 'outside'],
      },
      defaultValue: 'no-label',
      description: 'Label text position',
    },
    state: {
      name: 'Error',
      control: {
        type: 'radio',
        options: ['default', 'error'],
      },
      defaultValue: 'default',
      description: 'Support error state',
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    defaultOption: {
      name: 'Default option',
      control: {
        type: 'radio',
        options: ['no-default', 'option-1', 'option-2', 'option-3'],
      },
    },
    width: {
      name: 'Width',
      control: {
        type: 'range',
        min: 200,
        max: 600,
        step: 50,
      },
      defaultValue: 250,
    },
    extraDropdownOptions: {
      name: 'Extra dropdown options',
      type: 'string',
      defaultValue:
        '<sdds-dropdown-option value="option-4"> Copy this for more options... </sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="alpha-values-1">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö</sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="alpha-values-2">a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö</sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="num-values">0 1 2 3 4 5 6 7 8 9</sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="special-chars-1">! " # $ % & \' ( ) * + , - . /</sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="special-chars-2">: ; < = > ? @</sdds-dropdown-option>\n' +
        '<sdds-dropdown-option value="special-chars-3">[ \\ ] ^ _ ` { | } ~</sdds-dropdown-option>',
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
  width,
  extraDropdownOptions,
}) => `
    <div style="width:${width}px">
        <sdds-dropdown   
          id="sdds-dropdown-reg"        
          size="${size}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosition}"
          label="${label}"
          helper="${helper}"
          state="${state}"
          type="${type}"
          default-option="${defaultOption}">     
          <sdds-dropdown-option value="option-1" tabindex="0">Stockholm & Stockholm</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0">Hello 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>          
          ${extraDropdownOptions}
                  </sdds-dropdown>
      </div>
  `;

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  defaultOption: 'option-1',
};

export const LabelInside = Template.bind({});
LabelInside.args = {
  disabled: false,
  labelPosition: 'inside',
  label: 'Label text',
};

export const LabelOutside = Template.bind({});
LabelOutside.args = {
  disabled: false,
  labelPosition: 'outside',
  label: 'Label text',
};

export const Helper = Template.bind({});
Helper.args = {
  disabled: false,
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
  width,
}) => `
    <div style="width:${width}px">
        <sdds-dropdown-filter
         id="sdds-dropdown-filter" 
        size="${size}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        helper="${helper}"
        default-option="${defaultOption}"       
        data=${`[{"value":"option-1","label":"Jakarta"},{"value":"option-2","label":"Stockholm"},{"value":"option-3","label":"Barcelona"}]`}
        ></sdds-dropdown-filter>
      </div>
  `;

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

const NativeTemplate = ({
  size,
  helper = 'Helper text',
  label,
  state,
  width,
}) => `
    <div style="width:${width}px">
        <div class="sdds-dropdown ${
          size !== 'large' ? `sdds-dropdown-${size}` : ''
        } ${state === 'error' ? 'sdds-dropdown--error' : ''}" >
          <span class="sdds-dropdown-label-outside">${label}</span>
          <select name="nativeDropdown" id="mySelect">
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
          <span class="sdds-dropdown-helper">${helper}</span>
        </div>
      </div>
  `;

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
