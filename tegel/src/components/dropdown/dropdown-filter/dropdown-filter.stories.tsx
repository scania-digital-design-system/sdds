import { formatHtmlPreview } from '../../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Dropdown Filter',
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
    ],
  },
  argTypes: {
    state: {
      name: 'State',
      description: 'Support error state.',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Error'],
      table: {
        defaultValue: {
          summary: 'Default',
        },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the size of the dropdown.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      table: {
        defaultValue: {
          summary: 'Large',
        },
      },
    },
    openDirection: {
      name: 'Open direction',
      description: 'Sets the direction in which the dropdown will open.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
      table: {
        defaultValue: {
          summary: 'Auto',
        },
      },
    },
    defaultOption: {
      name: 'Default option',
      description: 'Sets a pre-selected option and replaces placeholder.',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
      table: {
        defaultValue: {
          summary: 'Option 1',
        },
      },
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Sets a placeholder text when no option is selected.',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    state: 'Default',
    size: 'Large',
    openDirection: 'Auto',
    defaultOption: 'Option 1',
    placeholder: 'Placeholder',
    helper: '',
    disabled: false,
  },
};

const FilterTemplate = ({
  state = 'default',
  size,
  openDirection,
  defaultOption,
  placeholder,
  labelPosition,
  label,
  helper = '',
  disabled = false,
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
    /* demo-wrapper is for demonstration purposes only*/
      .demo-wrapper {
        width: 300px;
        height:200px;
        }
    </style>

    <div class="demo-wrapper">
      <sdds-dropdown-filter
        id="sdds-dropdown-filter"
        size="${sizeLookup[size]}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        open-direction="${openDirection.toLowerCase()}"
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
        default-option="${defaultOptionLookup[defaultOption]}">
      </sdds-dropdown-filter>
    </div>
  `);
};

export const Default = FilterTemplate.bind({});
