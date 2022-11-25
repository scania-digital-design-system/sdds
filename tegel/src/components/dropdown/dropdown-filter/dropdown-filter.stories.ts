import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Dropdown-filter',
  parameters: {
    layout: 'centered',
    notes: readme,
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
      options: ['None', 'Outside'],
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
      control: {
        type: 'text',
      },
      description: 'Helper text assists the user with additional information about the dropdown',
    },
    label: {
      name: 'Label text',
      type: 'string',
      description: 'Label text helps to describe what the dropdown contains',
    },
    defaultOption: {
      description: 'Sets a pre-selected option and replaces placeholder',
      name: 'Default option',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
    },
  },
  args: {
    size: 'Large',
    placeholder: 'Placeholder',
    disabled: false,
    labelPosition: 'None',
    helper: '',
    defaultOption: 'Option 1',
    state: 'Default',
    label: 'Label text',
  },
};

const FilterTemplate = ({
  size,
  disabled = false,
  helper = '',
  label,
  state = 'default',
  placeholder,
  labelPosition,
  defaultOption,
}) => {
  const stateValue = state === 'Error' ? 'error' : 'default';
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Outside: 'outside' };

  const defaultOptionLookup = {
    'No default': 'no-default',
    'Option 1': 'option-1',
    'Option 2': 'option-2',
    'Option 3': 'option-3',
  };

  return formatHtmlPreview(`
    <style>
      .demo-wrapper {
        width: 300px;
        height:200px;}
    </style>
    <div class="demo-wrapper">
      <sdds-dropdown-filter
        id="sdds-dropdown-filter"
        size="${sizeLookup[size]}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        label-position="${labelPosLookup[labelPosition]}"
        ${labelPosLookup[labelPosition] !== 'no-default' ? `label="${label}"` : ''}
        ${helper !== '' ? `helper="${helper}"` : ''}
        state="${stateValue}"
        data='[
          {
            "value": "option-1",
            "label":"Jakarta"
          },
          {
            "value":"option-2"
            ,"label":"Stockholm"
          },
          {
            "value":"option-3",
            "label":"Barcelona"
          }
        ]'
        default-option="${defaultOptionLookup[defaultOption]}"
        >
      </sdds-dropdown-filter>
    </div>
  `);
};

export const Default = FilterTemplate.bind({});
