import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textfield',
  parameters: {
    notes: readme,
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1675%3A76544&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1675%3A76544&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    state: {
      name: 'State',
      description: 'Switch between default, success or error state.',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Success', 'Error'],
      table: {
        defaultValue: { summary: 'Default' },
      },
    },
    type: {
      name: 'Type',
      description: 'Sets the type of the textfield.',
      control: {
        type: 'radio',
        options: ['Password', 'Text'],
      },
      table: {
        defaultValue: { summary: 'Text' },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the size of the textfield.',
      control: {
        type: 'radio',
        options: ['Large', 'Medium', 'Small'],
      },
      table: {
        defaultValue: { summary: 'Large' },
      },
    },
    labelPosition: {
      name: 'Label position',
      description: 'Sets the label text position.',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    label: {
      description: 'Sets the label text for specific textfield.',
      name: 'Label text',
      control: {
        type: 'text',
      },
    },
    placeholderText: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Adds a helper text for the textfield.',
      control: {
        type: 'text',
      },
    },
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio'
      },
      options: ['Large', 'Medium', 'Small'],
      tabel: {
        defaultValue: { summary: 'Large' }
      },
    maxLength: {
      name: 'Max length',
      description: 'Sets a maximum value of how many characters the text can include.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    minWidth: {
      name: 'No minimum width',
      description: 'Toggles if the textare should have a minimum width or not.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    prefix: {
      name: 'Prefix',
      description: 'Adds prefix symbol or text before the textfield.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    prefixType: {
      name: 'Prefix type',
      description: 'Choose icon or text for prefix.',
      control: {
        type: 'radio',
      },
      options: ['Icon', 'Text'],
      table: {
        defaultValue: { summary: 'Icon' },
      },
      if: { arg: 'prefix', eq: true },
    },
    suffix: {
      name: 'Suffix',
      description: 'Adds suffix symbol or text after the textfield.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    suffixType: {
      name: 'Suffix type',
      description: 'Choose icon or text for suffix.',
      control: {
        type: 'radio',
      },
      options: ['Icon', 'Text'],
      table: {
        defaultValue: { summary: 'Icon' },
      },
      if: { arg: 'suffix', eq: true },
    },
    readonly: {
      description: 'Sets the textfield to read-only state.',
      name: 'Read Only',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Sets the textfield to disabled state.',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
},
  args: {
    modeVariant: 'Inherit from parent',
    state: 'Default',
    type: 'Text',
    size: 'Large',
    labelPosition: 'None',
    label: 'Label',
    placeholderText: 'Placeholder',
    helper: '',
    maxLength: 0,
    minWidth: 'Default',
    prefix: false,
    prefixType: 'Icon',
    suffix: false,
    suffixType: 'Icon',
    readonly: false,
    disabled: false,
  },
};

const Template = ({
  modeVariant,
  state,
  type,
  size,
  labelPosition,
  label,
  placeholderText,
  helper,
  maxLength,
  minWidth,
  prefix,
  prefixType,
  suffix,
  suffixType,
  readonly,
  disabled,
}) => {
  const maxlength = maxLength > 0 ? `max-length="${maxLength}"` : '';
  const stateValue = state.toLowerCase();
  const sizeLookUp = {
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  };
  return formatHtmlPreview(
    `
    <style>
    /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 200px;
    height: 150px;
  }
    </style>

  <div class="demo-wrapper">
    <sdds-textfield
      type="${type}"
      size="${sizeLookUp[size]}"
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"`: ''}
      state="${stateValue}"
      label="${label}"
      label-position="${labelPosition.toLowerCase()}"
      ${helper ? `helper="${helper}"` : ''}
      ${maxlength}
      ${disabled ? 'disabled' : ''}
      ${readonly ? 'readonly' : ''}
      ${minWidth ? 'no-min-width' : ''}
      placeholder="${placeholderText}" >
        ${
          prefix
            ? `
        <span slot="sdds-prefix">
          ${prefixType === 'Text' ? '$' : '<sdds-icon name="truck" size="20px"></sdds-icon> '}
        </span>`
            : ''
        }
        ${
          suffix
            ? `
        <span slot="sdds-suffix">
          ${suffixType === 'Text' ? '$' : '<sdds-icon name="truck" size="20px"></sdds-icon> '}
        </span>`
            : ''
        }
        </sdds-textfield>
  </div>
  `,
  );
};

export const WebComponent = Template.bind({});