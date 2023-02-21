import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Textarea',
  parameters: {
    notes: readme,
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1828%3A85238&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1828%3A85238&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
    },
    modeVariant: {
      name: 'Mode variant',
      description: 'Change the components mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    readonly: {
      description: 'Set textfield to read-only state',
      name: 'Read only',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
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
    rows: {
      name: 'Rows',
      description: 'Set the number of rows',
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
    placeholder: 'Placeholder',
    disabled: false,
    readonly: false,
    label: 'Label',
    labelPosition: 'None',
    helper: '',
    maxLength: 0,
    rows: 5,
    state: 'Default',
    modeVariant: 'Inherit from parent',
  },
};

const Template = ({
  placeholder,
  disabled,
  readonly,
  label,
  labelPosition,
  state,
  helper,
  maxLength,
  modeVariant,
  rows,
}) => {
  const maxlength = maxLength > 0 ? `max-length="${maxLength}"` : '';
  const stateValue = state.toLowerCase();
  const labelPosLookup = {
    None: 'no-label',
    Inside: 'inside',
    Outside: 'outside',
  };
  return formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
    .demo-wrapper {
      width: 400px;
    }
  </style>

  <div class="demo-wrapper">
        <sdds-textarea
          rows="${rows}"
          state="${stateValue}"
          label="${label}"
          helper="${helper}"
          ${
            modeVariant !== 'Inherit from parent'
              ? `mode-variant="${modeVariant.toLowerCase()}"`
              : ''
          }
          label-position="${labelPosLookup[labelPosition]}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'read-only' : ''}
          placeholder="${placeholder}"
          ${maxlength}>
        </sdds-textarea>
  </div>
  <!-- Script tag for demo purposes -->
  <script>
    textElement = document.querySelector('sdds-textarea')

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
  `);
};

export const Default = Template.bind({});
