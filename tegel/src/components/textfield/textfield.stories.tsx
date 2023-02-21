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
    placeholderText: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
    },
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['Password', 'Text'],
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
        type: 'radio',
        options: ['Large', 'Medium', 'Small'],
      },
    },
    minWidth: {
      name: 'No minimum width',
      description: 'Toggle the minimum width.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      description: 'Set textfield to read only',
      name: 'Read Only',
      control: {
        type: 'boolean',
      },
    },
    label: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
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
    prefix: {
      name: 'Prefix',
      description: 'Add prefix symbol/text before the textfield',
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
      if: { arg: 'prefix', eq: true },
    },
    suffix: {
      name: 'Suffix',
      description: 'Add suffix symbol/text after the textfield',
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
      if: { arg: 'suffix', eq: true },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
    },
    maxLength: {
      name: 'Max length',
      description: 'Set a maximum value of how long the text can be.',
      control: {
        type: 'number',
      },
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Success', 'Error'],
    },
  },
  args: {
    placeholderText: 'Placeholder',
    disabled: false,
    readonly: false,
    label: 'Label',
    labelPosition: 'None',
    helper: '',
    maxLength: 0,
    state: 'Default',
    suffix: false,
    suffixType: 'Icon',
    prefix: false,
    prefixType: 'Icon',
    minWidth: 'Default',
    size: 'Large',
    type: 'Text',
    modeVariant: 'Inherit from parent',
  },
};

const Template = ({
  type,
  placeholderText,
  size,
  minWidth,
  disabled,
  readonly,
  label,
  labelPosition,
  state,
  helper,
  prefix,
  prefixType,
  suffix,
  suffixType,
  maxLength,
  modeVariant,
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
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}
      state="${stateValue}"
      label="${label}"
      label-position="${labelPosition.toLowerCase()}"
      ${helper ? `helper="${helper}"` : ''}
      ${maxlength}
      ${disabled ? 'disabled' : ''}
      ${readonly ? 'read-only' : ''}
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
  <!-- Script tag for demo purposes -->
  <script>
    textElement = document.querySelector('sdds-textfield')
    textElement.addEventListener('sddsFocus',(event) => {
      console.log(event)
    })
    textElement.addEventListener('sddsBlur',(event) => {
      console.log(event)
    })
    textElement.addEventListener('sddsInput',(event) => {
      console.log(event)
    })
    textElement.addEventListener('sddsChange',(event) => {
      console.log(event)
    })
  </script>
  `,
  );
};

// ${true ? '<sdds-icon name="cross" slot="sdds-prefix"></sdds-icon>' : ''}

export const Default = Template.bind({});

Default.args = {};
