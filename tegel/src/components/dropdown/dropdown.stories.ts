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
      },
      options: ['Default', 'Multiselect'],
      description: 'Size of the dropdown',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
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
      },
      options: ['None', 'Inside', 'Outside'],
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
      options: ['Default', 'Error'],
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
      if: { arg: 'type', neq: 'Multiselect' },
      description: 'Sets a pre-selected option and replaces placeholder',
      name: 'Default option',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
    },
    multiDefaultOption: {
      name: 'Default options',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
  },
  args: {
    type: 'Default',
    size: 'Large',
    placeholder: 'Placeholder',
    labelPosition: 'None',
    disabled: false,
    state: 'Default',
    helper: false,
    label: 'Label text',
    defaultOption: 'No default',
    multiDefaultOption: ['Option 1', 'Option 2'],
  },
};

const Template = ({
  size,
  type,
  disabled = false,
  labelPosition,
  helper,
  state = 'default',
  placeholder,
  defaultOption,
  multiDefaultOption,
}) => {
  const stateValue = state === 'Error' ? 'error' : 'default';
  const typeLookup = { Default: 'default', Multiselect: 'multiselect' };
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Inside: 'inside', Outside: 'outside' };
  const defaultOptionLookup = {
    'No default': 'no-default',
    'Option 1': 'option-1',
    'Option 2': 'option-2',
    'Option 3': 'option-3',
  };
  const multiDefaultOptionValue =
    type === 'Multiselect'
      ? multiDefaultOption.map((value) => value.toLowerCase().replace(' ', '-'))
      : [];

  return formatHtmlPreview(`
    <div class="demo-wrapper">
        <sdds-dropdown
          id="sdds-dropdown-reg"
          size="${sizeLookup[size]}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosLookup[labelPosition]}"
          ${labelPosLookup[labelPosition] !== 'no-default' ? 'label="Label text"' : ''}
          ${helper ? 'helper="Helper text"' : ''}
          state="${stateValue}"
          type="${typeLookup[type]}"
          default-option="${
            typeLookup[type] === 'default'
              ? defaultOptionLookup[defaultOption]
              : multiDefaultOptionValue
          }" >
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
};

export const WebComponent = Template.bind({});
WebComponent.args = {
  type: 'Default',
  size: 'Large',
  labelPosition: 'None',
  helper: false,
  disabled: false,
};

const MultiselectTemplate = ({
  size,
  disabled = false,
  type,
  helper,
  placeholder,
  multiDefaultOption,
  labelPosition,
}) => {
  const typeLookup = { Default: 'default', Multiselect: 'multiselect' };
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Inside: 'inside', Outside: 'outside' };
  const multiDefaultOptionValue = multiDefaultOption.map((value) =>
    value.toLowerCase().replace(' ', '-'),
  );

  return formatHtmlPreview(`
    <div class="demo-wrapper">
        <sdds-dropdown
        id="sdds-dropdown-multiselect"
        size="${sizeLookup[size]}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        ${helper ? 'helper="Helper text"' : ''}
        default-option='${multiDefaultOptionValue}'
        type='${typeLookup[type]}'
        label-position="${labelPosLookup[labelPosition]}"
        ${labelPosLookup[labelPosition] !== 'no-default' ? 'label="Label text"' : ''}
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
};

export const WebComponentMultiselect = MultiselectTemplate.bind({});
WebComponentMultiselect.args = {
  type: 'Multiselect',
  multiDefaultOption: ['Option 1', 'Option 2'],
};
WebComponentMultiselect.argTypes = {
  state: {
    table: {
      disable: true,
    },
  },
};
