import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the dropdown-multiselect',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
    },
    data: {
      name: 'Type of data',
      description: 'Toggle between data being passed as children or via the data prop.',
      control: {
        type: 'radio',
      },
      options: ['Children', 'JSON'],
    },
    label: {
      name: 'Label text',
      description: 'Label text for the dropdown-multiselect.',
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
      description: 'Placeholder text for the dropdown-multiselect.',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Helper text for the dropdown-multiselect.',
      control: {
        type: 'text',
      },
    },
    openDirection: {
      name: 'Open direction',
      description: 'The direction which the dropdown-multiselect opens.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
    },
    error: {
      name: 'Error',
      description: 'Sets the dropdown-multiselect into an error state.',
      control: {
        type: 'boolean',
      },
    },
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option and replaces placeholder',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 3'],
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
    multiDefaultOption: ['Option 2'],
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
  multiDefaultOption,
}) =>
  formatHtmlPreview(`
    <style>
      .demo-wrapper {
        width: 200px;
      }
    </style>
    <div class="demo-wrapper">
      <sdds-dropdown-multiselect-v2
      id="dropdown"
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
            "selected":${multiDefaultOption.includes('Option 1') ? 'true' : 'false'}
          },
          {
            "value":"option-2",
            "label":"Option 2",
            "selected":${multiDefaultOption.includes('Option 2') ? 'true' : 'false'}
          },
          {
            "value":"option-3",
            "label":"Option 3",
            "selected":${multiDefaultOption.includes('Option 3') ? 'true' : 'false'}
          },
          {
            "value":"option-4",
            "label":"Option 4",
            "selected":${multiDefaultOption.includes('Option 4') ? 'true' : 'false'}
          }
        ]'`
          : ''
      }>
      ${
        data === 'Children'
          ? `
      <sdds-dropdown-multiselect-option-v2 ${
        multiDefaultOption.includes('Option 1') ? 'selected' : ''
      } value="option-1" disabled label="Option 1">
      </sdds-dropdown-multiselect-option-v2>
      <sdds-dropdown-multiselect-option-v2 ${
        multiDefaultOption.includes('Option 2') ? 'selected' : ''
      } value="option-2" label="Option 2">
      </sdds-dropdown-multiselect-option-v2>
      <sdds-dropdown-multiselect-option-v2 ${
        multiDefaultOption.includes('Option 3') ? 'selected' : ''
      } value="option-3" label="Option 3">
      </sdds-dropdown-multiselect-option-v2>
      <sdds-dropdown-multiselect-option-v2 ${
        multiDefaultOption.includes('Option 4') ? 'selected' : ''
      } value="option-4" label="Option 4">
      </sdds-dropdown-multiselect-option-v2>
      `
          : ''
      }
      </sdds-dropdown-multiselect-v2>
      <button id="button-id">Reset</button>
    </div>
    <script>
      document.getElementById('button-id').addEventListener('click', () => {
        document.getElementById('dropdown').reset();
      })
    </script>
    `);
export const WebComponentMultiselect = Template.bind({});
