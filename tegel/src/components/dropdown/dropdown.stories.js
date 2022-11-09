import readme from './readme.md';
import readmeOption from './dropdown-option/readme.md';

import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    notes: { 'Dropdown': readme, 'Dropdown option': readmeOption },
  },
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'radio',
        options: { Default: 'default', Multiselect: 'multiselect' },
      },
      description: 'Size of the dropdown',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: { Large: 'lg', Medium: 'md', Small: 'sm' },
      },
      description: 'Size of the dropdown',
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Placeholder text when no option is selected',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
        options: {
          None: 'no-default',
          Inside: 'inside',
          Outside: 'outside',
        },
      },
      description: 'Label text position',
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    state: {
      name: 'State',
      control: {
        type: 'radio',
      },
      options: {
        Default: 'default',
        Error: 'error',
      },
      description: 'Support error state',
    },
    helper: {
      name: 'Helper text',
      control: 'boolean',
      description: 'Helper text assists the user with additional information about the dropdown',
    },
    label: {
      name: 'Label text',
      type: 'string',
      description: 'Label text helps to describe what the dropdown contains',
    },
    defaultOption: {
      if: { arg: 'type', neq: 'multiselect' },
      description: 'Sets a pre-selected option and replaces placeholder',
      name: 'Default option',
      control: {
        type: 'radio',
        options: {
          'No default': 'no-default',
          'Option 1': 'option-1',
          'Option 2': 'option-2',
          'Option 3': 'option-3',
        },
      },
    },
    multiDefaultOption: {
      name: 'Default options',
      if: { arg: 'type', neq: 'default' },

      control: {
        type: 'check',
        options: {
          'No default': 'no-default',
          'Option 1': 'option-1',
          'Option 2': 'option-2',
          'Option 3': 'option-3',
        },
      },
    },
  },
  args: {
    type: 'default',
    size: 'lg',
    placeholder: 'Placeholder',
    labelPosition: 'no-default',
    disabled: false,
    state: 'default',
    helper: false,
    label: 'Label text',
    defaultOption: 'no-default',
    multiDefaultOption: 'no-default',
  },
};

const Template = ({ size, type, disabled = false, labelPosition, helper, state = 'default', placeholder, defaultOption }) =>
  formatHtmlPreview(`
    <div class="demo-wrapper">
        <sdds-dropdown
          id="sdds-dropdown-reg"
          size="${size}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosition}"
          ${labelPosition !== 'no-default' ? 'label="Label text"' : ''}
          ${helper ? 'helper="Helper text"' : ''}
          state="${state}"
          type="${type}"
          default-option="${defaultOption}" >
          <sdds-dropdown-option value="option-1" tabindex="0">Stockholm & Stockholm</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0">Hello 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>

      <style>
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
</style>
  `);

export const WebComponent = Template.bind({});
WebComponent.args = {
  type: 'default',
  size: 'lg',
  labelPosition: 'no-default',
  helper: false,
  disabled: false,
};

const MultiselectTemplate = ({ size, disabled = false, type, helper, placeholder, multiDefaultOption, labelPosition }) =>
  formatHtmlPreview(`
    <div class="demo-wrapper">
        <sdds-dropdown
         id="sdds-dropdown-multiselect"
        size="${size}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        ${helper ? 'helper="Helper text"' : ''}
        default-option='${multiDefaultOption}'
        type='${type}'
        label-position="${labelPosition}"
        ${labelPosition !== 'no-default' ? 'label="Label text"' : ''}
        >
          <sdds-dropdown-option value="option-1" tabindex="0">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0">Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3 Longer</sdds-dropdown-option>
        </sdds-dropdown>
      </div>

      <style>
  .demo-wrapper {
    width: 300px;
    height:200px;}
</style>
  `);

export const WebComponentMultiselect = MultiselectTemplate.bind({});
WebComponentMultiselect.args = {
  type: 'multiselect',
};
WebComponentMultiselect.argTypes = {
  state: {
    table: {
      disable: true,
    },
  },
};
