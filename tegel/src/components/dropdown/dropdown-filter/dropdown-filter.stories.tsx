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
      name: 'Error state',
      description: 'Puts the component in error state.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
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
        defaultValue: { summary: 'lg' },
      },
    },
    openDirection: {
      name: 'Open direction',
      description: 'Sets which direction the dropdown will open in.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    labelPosition: {
      name: 'Label position',
      description: 'Sets the label text position.',
      control: {
        type: 'radio',
      },
      options: ['No label', 'Outside'],
      table: {
        defaultValue: { summary: 'no-label' },
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Sets a label text to help describe what the dropdown contains.',
      control: {
        type: 'text',
      },
      if: { arg: 'labelPosition', neq: 'None' },
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Sets the placeholder text when no option is selected.',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Sets a helper text to assist the user with additional information about the dropdown.',
      control: {
        type: 'text',
      },
    },
    defaultOption: {
      name: 'Default option',
      description: 'Sets a pre-selected option and replaces the placeholder.',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the dropdown.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    state: false,
    size: 'Large',
    openDirection: 'Auto',
    labelPosition: 'No label',
    labelText: 'Label text',
    placeholder: 'Placeholder',
    helper: '',
    defaultOption: 'Option 1',
    disabled: false,
  },
};

const FilterTemplate = ({
  state = false,
  size,
  openDirection,
  labelPosition,
  labelText,
  placeholder,
  helper = '',
  defaultOption,
  disabled = false,
}) => {
  // const stateValue = state === 'Error' ? 'error' : 'default';
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { 'No label': 'no-default', 'Outside': 'outside' };
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
        ${labelPosLookup[labelPosition] !== 'no-default' ? `label="${labelText}"` : ''}
        ${helper !== '' ? `helper="${helper}"` : ''}
        state="${state}"
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
