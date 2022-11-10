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
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      description: 'Helper text assists the user with additional information about the dropdown',
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
    helper: '',
    defaultOption: 'Option 1',
  },
};

const FilterTemplate = ({ size, disabled = false, helper = '', placeholder, defaultOption }) => {
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const defaultOptionLookup = {
    'No default': 'no-default',
    'Option 1': 'option-1',
    'Option 2': 'option-2',
    'Option 3': 'option-3',
  };

  return `
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
        disabled="${disabled}"\
        ${helper !== '' ? `\n    helper="${helper}"` : ''}
        data='[{"value": "option-1","label":"Jakarta"},{"value":"option-2","label":"Stockholm"},{"value":"option-3","label":"Barcelona"}]'
        default-option="${defaultOptionLookup[defaultOption]}">
      </sdds-dropdown-filter>
    </div>
  `;
};

export const Default = FilterTemplate.bind({});
