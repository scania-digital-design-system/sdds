import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    notes: readme,
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'radio',
        options: { Default: 'default', Multiselect: 'multiselect' },
      },
      defaultValue: 'default',
      description: 'Size of the dropdown',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: { Large: 'lg', Medium: 'md', Small: 'sm' },
      },
      defaultValue: 'lg',
      description: 'Size of the dropdown',
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      defaultValue: 'Placeholder',
      description: 'Placeholder text when no option is selected',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
        options: {
          'No default': 'no-default',
          'Inside': 'inside',
          'Outside': 'outside',
        },
      },
      defaultValue: 'no-default',
      description: 'Label text position',
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
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
      defaultValue: 'default',
      description: 'Support error state',
    },
    helper: {
      name: 'Helper text',
      control: 'boolean',
      defaultValue: false,
      description: 'Helper text assists the user with additional information about the dropdown',
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
      defaultValue: 'no-default',
    },
    multiDefaultOption: {
      name: 'Default options',
      if: { arg: 'type', neq: 'default' },

      control: {
        type: 'check',
        options: {
          'Option 1': 'option-1',
          'Option 2': 'option-2',
          'Option 3': 'option-3',
        },
      },
    },
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
  label: 'Label text',
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
