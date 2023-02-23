import { formatHtmlPreview } from '../../utils/utils';
import readmeDropdown from './readme.md';
import readmeDropdownOption from './dropdown-option-v2/readme.md';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    notes: { 'Dropdown': readmeDropdown, 'Dropdown option': readmeDropdownOption },
    layout: 'padded',
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the dropdown-multiselect',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    multiselect: {
      name: 'Multiselect',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    filter: {
      name: 'Filter',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
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
      table: {
        defaultValue: { summary: 'no-label' },
      },
      if: { arg: 'filter', eq: false },
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
      table: {
        defaultValue: { summary: 'auto' },
      },
      options: ['Up', 'Down', 'Auto'],
    },
    error: {
      name: 'Error',
      description: 'Sets the dropdown-multiselect into an error state.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option.',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3', 'Option 3'],
      if: { arg: 'multiselect', eq: false },
    },
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option.',
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 3'],
      if: { arg: 'multiselect', eq: true },
    },
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      description: 'Button mode variant.',
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
  },
  args: {
    multiselect: false,
    filter: false,
    size: 'Large',
    data: 'Children',
    label: 'Label',
    labelPosition: 'Outside',
    placeholder: 'Placeholder',
    helper: 'Helper',
    openDirection: 'Auto',
    error: false,
    defaultOption: 'No default',
    multiDefaultOption: ['Option 2'],
    modeVariant: 'Inherit from parent',
  },
};

const multiDefaultOptionJSON = (multiDefaultOption: string[]) => `[
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
  ]`;

const defaultOptionJSON = (defaultOption: string) => `
[
  {
    "value": "option-1",
    "label":"Option 1",
    "disabled":"true",
    "selected":"${defaultOption === 'Option 1'}"
  },
  {
    "value":"option-2",
    "label":"Option 2",
    "selected":"${defaultOption === 'Option 2'}"
  },
  {
    "value":"option-3",
    "label":"Option 3",
    "selected": "${defaultOption === 'Option 3'}"
  },
  {
    "value":"option-4",
    "label":"Option 4",
    "selected": "${defaultOption === 'Option 4'}"
  }
]`;

const multiDefaultOptionChildren = (multiDefaultOption: string[]) => `
      <sdds-dropdown-option-v2 ${
        multiDefaultOption.includes('Option 1') ? 'selected' : ''
      } value="option-1" label="Option-1" disabled>
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        multiDefaultOption.includes('Option 2') ? 'selected' : ''
      } value="option-2" label="Option-2">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        multiDefaultOption.includes('Option 3') ? 'selected' : ''
      } value="option-3" label="Option-3">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        multiDefaultOption.includes('Option 4') ? 'selected' : ''
      } value="option-4" label="Option-4">
      </sdds-dropdown-option-v2>
 `;
const defaultOptionChildren = (defaultOption: string) => `
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 1' ? 'selected' : ''
      } value="option-1" label="Option-1" disabled>
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 2' ? 'selected' : ''
      } value="option-2" label="Option-2">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 3' ? 'selected' : ''
      } value="option-3" label="Option-3">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 ${
        defaultOption === 'Option 4' ? 'selected' : ''
      } value="option-4" label="Option-4">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 value="test">
        Option 7
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
      <sdds-dropdown-option-v2 label="Option-5">
      </sdds-dropdown-option-v2>
`;

const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };

const Template = ({
  multiselect,
  filter,
  data,
  size,
  error,
  helper,
  openDirection,
  placeholder,
  label,
  labelPosition,
  defaultOption,
  modeVariant,
  multiDefaultOption,
}) =>
  formatHtmlPreview(`
    <style>
      .demo-wrapper {
        display: flex;
        justify-content: center;
        ${
          openDirection === 'Up'
            ? `
        height: 300px;
        align-items: end;
        `
            : ''
        }
      }

      sdds-dropdown-v2 {
        width: 200px;
      }

    </style>
    <div class="demo-wrapper">
      <sdds-dropdown-v2
        ${modeVariant === 'Primary' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
        ${modeVariant === 'Secondary' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
        ${error ? 'error' : ''}
        ${helper ? `helper="${helper}"` : ''}
        open-direction="${openDirection.toLowerCase()}" 
        label="${label}" 
        placeholder="${placeholder}" 
        ${labelPosition ? `label-position="${labelPosition.toLowerCase().replace(' ', '-')}"` : ''}
        size="${sizeLookup[size]}"
        ${multiselect ? 'multiselect' : ''}
        ${filter ? 'filter' : ''}
        placeholder="Placeholder"
        ${
          data === 'JSON'
            ? `data='${
                multiselect
                  ? multiDefaultOptionJSON(multiDefaultOption)
                  : defaultOptionJSON(defaultOption)
              }'`
            : ''
        }
        >
        ${
          data === 'Children'
            ? `${
                multiselect
                  ? multiDefaultOptionChildren(multiDefaultOption)
                  : defaultOptionChildren(defaultOption)
              }`
            : ''
        }
      </sdds-dropdown-v2>
    </div>

    `);
export const WebComponent = Template.bind({});

/*   <script>
        document.addEventListener('dropdownSelect', (event)=> {
          console.log('Dropdown with id:', event.detail.dropdownId, 'had selection made, chosen value(s) are:', event.detail.value)
        })
    </script> */
