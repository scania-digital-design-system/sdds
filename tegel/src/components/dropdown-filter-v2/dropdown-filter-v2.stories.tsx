import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the dropdown',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
    },
    data: {
      name: 'Type of data',
      description: 'Toggle between data being passed children or via the data prop.',
      control: {
        type: 'radio',
      },
      options: ['Children', 'JSON'],
    },
    label: {
      name: 'Label text',
      description: 'Label text for the dropdown.',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      name: 'Placeholder text',
      description: 'Placeholder text for the dropdown.',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Helper text for the dropdown.',
      control: {
        type: 'text',
      },
    },
    openDirection: {
      name: 'Open direction',
      description: 'The direction which the dropdown opens.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
    },
    error: {
      name: 'Error',
      description: 'Sets the dropdown into an error state.',
      control: {
        type: 'boolean',
      },
    },
    defaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option and replaces placeholder',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3', 'Option 3'],
    },
  },
  args: {
    size: 'Large',
    data: 'Children',
    label: 'Label',
    placeholder: 'Placeholder',
    helper: 'Helper',
    openDirection: 'Auto',
    error: false,
    defaultOption: 'No default',
  },
};

const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };

const Template = ({
  data,
  size,
  placeholder,
  openDirection,
  error,
  helper,
  label,
  defaultOption,
}) =>
  formatHtmlPreview(`
<style>
  .demo-wrapper {
    width: 200px;
  }
</style>
<div class="demo-wrapper">
  <sdds-dropdown-filter-v2
    ${label ? `label="${label}"` : ''}
    size="${sizeLookup[size]}"
    ${error ? 'error' : ''}
    ${helper ? `helper="${helper}"` : ''}
    placeholder="${placeholder}" 
    open-direction="${openDirection.toLowerCase()}" 
    ${
      data === 'JSON'
        ? `data='[
          {
            "value": "option-1",
            "label":"Option 1",
            "disabled":"true",
            "selected":${defaultOption === 'Option 1' ? 'true' : 'false'}
          },
          {
            "value":"option-2",
            "label":"Option 2",
            "selected":${defaultOption === 'Option 3' ? 'true' : 'false'}
          },
          {
            "value":"option-3",
            "label":"Option 3",
            "selected":${defaultOption === 'Option 3' ? 'true' : 'false'}
          },
          {
            "value":"option-4",
            "label":"Option 4",
            "selected":${defaultOption === 'Option 4' ? 'true' : 'false'}
          }
        ]'`
        : ''
    }>
      ${
        data === 'Children'
          ? `
        <sdds-dropdown-filter-option-v2 value="value-1" disabled label="Value-1" ${
          defaultOption === 'Option 1' ? 'selected' : ''
        }>
        </sdds-dropdown-filter-option-v2>
        <sdds-dropdown-filter-option-v2 value="value-2" label="Value-2" ${
          defaultOption === 'Option 2' ? 'selected' : ''
        }>
        </sdds-dropdown-filter-option-v2>
        <sdds-dropdown-filter-option-v2 value="value-3" label="Value-3" ${
          defaultOption === 'Option 3' ? 'selected' : ''
        }>
        </sdds-dropdown-filter-option-v2>
        <sdds-dropdown-filter-option-v2 value="value-4" label="Value-4" ${
          defaultOption === 'Option 4' ? 'selected' : ''
        } >
        </sdds-dropdown-filter-option-v2>
      `
          : ''
      }
  </sdds-dropdown-filter-v2>
</div>
`);
export const WebComponentFilter = Template.bind({});
