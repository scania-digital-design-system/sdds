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
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variation adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent','Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
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
    placeholder: {
      name: 'Placeholder',
      description: 'Sets the placeholder text.',
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
    rows: {
      name: 'Rows',
      description: 'Sets the number of rows the textfield consists of.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 5 },
      },
    },
    readonly: {
      description: 'Sets the textfield to read-only state.',
      name: 'Read only',
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
  args: {
    labelPosition: 'None',
    label: 'Label',
    placeholder: 'Placeholder',
    helper: '',
    maxLength: 0,
    rows: 5,
    state: 'Default',
    modeVariant: 'Inherit from parent',
    readonly: false,
    disabled: false,
  },
};

const Template = ({
  modeVariant,
  state,
  labelPosition,
  label,
  placeholder,
  helper,
  maxLength,
  rows,
  readonly,
  disabled,
}) => {
  const maxlength = maxLength > 0 ? `max-length="${maxLength}"` : '';
  const stateValue = state.toLowerCase();
  const labelPosLookup = {
    None: 'no-label',
    Inside: 'inside',
    Outside: 'outside',
  };
  const modeVariantLookUp = {
    Primary: 'primary',
    Secondary: 'secondary',
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
          mode-variant="${modeVariantLookUp[modeVariant]}"
          label-position="${labelPosLookup[labelPosition]}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'read-only' : ''}
          placeholder="${placeholder}"
          ${maxlength}>
        </sdds-textarea>
  </div>
  `);
};

export const WebComponent = Template.bind({});