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
      description: 'Disables the component',
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
    openDirection: {
      name: 'Open direction',
      description: 'The direction the dropdown will open.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
      table: {
        summary: {
          defaultValue: 'auto',
        },
      },
    },
  },
  args: {
    size: 'Large',
    placeholder: 'Placeholder',
    disabled: false,
    helper: '',
    defaultOption: 'Option 1',
    state: 'Default',
    openDirection: 'Auto',
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
  openDirection,
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
