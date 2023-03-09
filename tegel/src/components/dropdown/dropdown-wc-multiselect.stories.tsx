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
      control: {
        type: 'radio',
      },
      options: ['Default', 'Error'],
      description: 'Support error state',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      description: 'Size of the dropdown',
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
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      description: 'Label text position',
    },
    labelText: {
      name: 'Label text',
      control: 'text',
      description: 'Label text helps to describe what the dropdown contains',
      if: { arg: 'labelPosition', neq: 'None' },
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Placeholder text when no option is selected',
    },
    helper: {
      name: 'Add helper text',
      control: 'boolean',
      description: 'Adds a helper text.',
    },
    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown',
      control: 'text',
      if: { arg: 'helper', eq: true },
    },
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option and replaces placeholder',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    state: 'Default',
    size: 'Large',
    openDirection: 'Auto',
    labelPosition: 'None',
    labelText: 'Label text',
    placeholder: 'Placeholder',
    helper: false,
    helperText: 'Helper text',
    multiDefaultOption: ['Option 1', 'Option 2'],
    disabled: false,
  },
};

const Template = ({
  state = 'default',
  size,
  openDirection,
  labelPosition,
  labelText,
  placeholder,
  helper,
  helperText,
  multiDefaultOption,
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
