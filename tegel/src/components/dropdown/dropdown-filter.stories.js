import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme_filter.md';

export default {
  title: 'Components/Dropdown-filter',
  parameters: {
    layout: 'centered',
    notes: readme,
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
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
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      defaultValue: '',
      description: 'Helper text assists the user with additional information about the dropdown',
    },
    defaultOption: {
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
  },
};

const FilterTemplate = ({ size, disabled = false, helper = '', placeholder, defaultOption }) => `
<div class="demo-wrapper">
  <sdds-dropdown-filter
    id="sdds-dropdown-filter" 
    size="${size}"
    placeholder="${placeholder}"
    disabled="${disabled}"\
    ${helper !== '' ? `\n    helper="${helper}"` : ''} 
    default-option="${defaultOption}"      
    data=${`[{"value":"option-1","label":"Jakarta"},{"value":"option-2","label":"Stockholm"},{"value":"option-3","label":"Barcelona"}]`}
  >
  </sdds-dropdown-filter>
</div>
<style>
  .demo-wrapper {
    width: 300px;
    height:200px;}
</style>
  `;

export const Default = FilterTemplate.bind({});
