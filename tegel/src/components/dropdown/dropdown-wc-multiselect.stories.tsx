import readme from './readme.md';
import readmeOption from './dropdown-option/readme.md';

import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    notes: { 'Dropdown': readme, 'Dropdown option': readmeOption },
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
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets pre-selected option(s) and replaces placeholder',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
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
    labelPosition: {
      name: 'Label position',
      description: 'Sets label text position.',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      table: {
        defaultValue: {
          summary: 'None',
        },
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Label text helps to describe what the dropdown contains.',
      control: {
        type: 'text',
      },
      if: { arg: 'labelPosition', neq: 'None' },
    },
    helper: {
      name: 'Add helper text',
      description: 'Adds a helper text.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown.',
      control: {
        type: 'text',
      },
      if: { arg: 'helper', eq: true },
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
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets pre-selected option(s) and replaces placeholder',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Sets a placeholder text when no option is selected.',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      description: 'Sets label text position.',
    },
    labelText: {
      name: 'Label text',
      control: 'text',
      description: 'Label text helps to describe what the dropdown contains.',
      if: { arg: 'labelPosition', neq: 'None' },
    },
    helper: {
      name: 'Add helper text',
      control: 'boolean',
      description: 'Adds a helper text.',
    },
    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown.',
      control: 'text',
      if: { arg: 'helper', eq: true },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    state: 'Default',
    size: 'Large',
    openDirection: 'Auto',
    multiDefaultOption: ['Option 1', 'Option 2'],
    placeholder: 'Placeholder',
    labelPosition: 'None',
    labelText: 'Label text',
    helper: false,
    helperText: 'Helper text',
    disabled: false,
  },
};

const Template = ({
  state = 'default',
  size,
  openDirection,
  multiDefaultOption,
  placeholder,
  labelPosition,
  labelText,
  helper,
  helperText,
  disabled = false,
}) => {
  const stateValue = state === 'Error' ? 'error' : 'default';
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Inside: 'inside', Outside: 'outside' };
  const multiDefaultOptionValue = multiDefaultOption.map((value) =>
    value.toLowerCase().replace(' ', '-'),
  );
  return formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
  </style>

    <div class="demo-wrapper">
        <sdds-dropdown
          id="sdds-dropdown-reg"
          size="${sizeLookup[size]}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          open-direction="${openDirection.toLowerCase()}"
          label-position="${labelPosLookup[labelPosition]}"
          ${labelPosLookup[labelPosition] !== 'no-default' ? `label="${labelText}"` : ''}
          ${helper ? `helper="${helperText}"` : ''}
          state="${stateValue}"
          type="multiselect"
          default-option="${multiDefaultOptionValue}" >
          <sdds-dropdown-option value="option-1" tabindex="0">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0" disabled>Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
  `);
};

export const WebComponentMultiselect = Template.bind({});
