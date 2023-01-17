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
      description: 'Toggle between data being passed as children or via the data prop (JSON).',
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
    labelPosition: {
      name: 'Position of the label',
      description: `The position of the label, if 'inside' the label will take precidence over the placeholder.`,
      control: {
        type: 'radio',
      },
      options: ['Outside', 'Inside', 'No label'],
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
    labelPosition: 'Outside',
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
  labelPosition,
  placeholder,
  openDirection,
  error,
  helper,
  defaultOption,
}) =>
  formatHtmlPreview(`
    <style>
      .demo-wrapper {
        width: 200px;
      }
    </style>
    <div class="demo-wrapper">
      <sdds-dropdown-v2 
      ${error ? 'error' : ''}
      ${helper ? `helper="${helper}"` : ''}
      open-direction="${openDirection.toLowerCase()}" 
      label="Label" 
      placeholder="${placeholder}" 
      label-position="${labelPosition.toLowerCase().replace(' ', '-')}" 
      size="${sizeLookup[size]}"
      ${
        data === 'JSON'
          ? `data='[
          {
            "value": "option-1",
            "label":"Option 1",
            "disabled":"true",
            ${defaultOption === 'Option 1' ? `"selected": "true"` : ''}
          },
          {
            "value":"option-2",
            "label":"Option 2",
            ${defaultOption === 'Option 2' ? `"selected": "true"` : ''}

          },
          {
            "value":"option-3",
            "label":"Option 3",
            ${defaultOption === 'Option 3' ? `"selected": "true"` : ''}
          },
          {
            "value":"option-4",
            "label":"Option 4",
            ${defaultOption === 'Option 4' ? `"selected": "true"` : ''}
          }
        ]'`
          : ''
      }>
      ${
        data === 'Children'
          ? `
      <sdds-dropdown-option-v2 value="value-1" ${
        defaultOption === 'Option 1' ? 'selected' : ''
      } disabled label="Option 1">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 2' ? 'selected' : ''
      } value="value-2" label="Option 2">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 3' ? 'selected' : ''
      } value="value-3" label="Option 3">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 4' ? 'selected' : ''
      } value="value-4" label="Option 4">
      </sdds-dropdown-option-v2>
      `
          : ''
      }
      </sdds-dropdown-v2>
    </div>
    `);
export const WebComponent = Template.bind({});
