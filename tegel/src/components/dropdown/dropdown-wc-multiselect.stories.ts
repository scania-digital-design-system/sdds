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
    size: 'Large',
    placeholder: 'Placeholder',
    labelPosition: 'None',
    disabled: false,
    state: 'Default',
    helper: false,
    label: 'Label text',
    multiDefaultOption: ['Option 1', 'Option 2'],
  },
};

const Template = ({
  size,
  disabled = false,
  labelPosition,
  label,
  helper,
  state = 'default',
  placeholder,
  multiDefaultOption,
}) => {
  const stateValue = state === 'Error' ? 'error' : 'default';
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Inside: 'inside', Outside: 'outside' };
  const multiDefaultOptionValue = multiDefaultOption.map((value) =>
    value.toLowerCase().replace(' ', '-'),
  );
  return formatHtmlPreview(`
  <style>
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
  </style>
    <div class="demo-wrapper">
        <sdds-dropdown
          id="sdds-dropdown-reg"
          size="${sizeLookup[size]}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosLookup[labelPosition]}"
          ${labelPosLookup[labelPosition] !== 'no-default' ? `label="${label}"` : ''}
          ${helper ? 'helper="Helper text"' : ''}
          state="${stateValue}"
          type="multiselect"
          default-option="${multiDefaultOptionValue}" >
          <sdds-dropdown-option value="option-1" tabindex="0">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0">Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
  `);
};

export const WebComponentMultiselect = Template.bind({});
