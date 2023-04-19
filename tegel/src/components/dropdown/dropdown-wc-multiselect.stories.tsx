import readme from './readme.md';
import readmeOption from './dropdown-option/readme.md';
import { formatHtmlPreview } from '../../utils/utils';
import { ComponentsFolder } from '../../utils/constants';

export default {
  title: ComponentsFolder,
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
    modeVariant: {
      name: 'Mode variant',
      description:
        'Mode variant adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
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
      options: ['No label', 'Inside', 'Outside'],
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
      if: { arg: 'labelPosition', neq: 'No label' },
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
      description:
        'Sets a helper text to assist the user with additional information about the dropdown.',
      control: {
        type: 'text',
      },
    },
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option and replaces the placeholder.',
      if: { arg: 'type', neq: 'Default' },
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
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
    modeVariant: 'Inherit from parent',
    state: false,
    size: 'Large',
    openDirection: 'Auto',
    labelPosition: 'No label',
    labelText: 'Label text',
    placeholder: 'Placeholder',
    helper: '',
    multiDefaultOption: ['Option 1', 'Option 2'],
    disabled: false,
  },
};

const Template = ({
  modeVariant,
  state = false,
  size,
  openDirection,
  labelPosition,
  labelText,
  placeholder,
  helper,
  multiDefaultOption,
  disabled = false,
}) => {
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { 'No label': 'no-label', 'Inside': 'inside', 'Outside': 'outside' };
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
        ${
          modeVariant !== 'Inherit from parent'
            ? `mode-variant="${modeVariant.toLowerCase()}".sdds-option-label {
          `
            : ''
        }
          id="sdds-dropdown-reg"
          size="${sizeLookup[size]}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          open-direction="${openDirection.toLowerCase()}"
          label-position="${labelPosLookup[labelPosition]}"
          ${labelPosLookup[labelPosition] !== 'no-label' ? `label="${labelText}"` : ''}
          ${helper !== '' ? `helper="${helper}"` : ''}
          state="${state}"
          type="multiselect"
          default-option="${multiDefaultOptionValue}" >
          <sdds-dropdown-option value="option-1" tabindex="0">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0" disabled>Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
  `);
};

export const DropdownMultiselect = Template.bind({});
