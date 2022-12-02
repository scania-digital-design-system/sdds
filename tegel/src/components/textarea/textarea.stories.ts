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
      description: 'Set textfield to disabled state',
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
      description: 'Label can be placed inside the textfield',
      name: 'Label position',
      control: {
        type: 'radio',
        options: ['No label', 'Inside', 'Outside'],
      },
    },
    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
    },
    textcounter: {
      name: 'Text counter',
      description: 'Set a maximum value how long the text can be',
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
        options: ['None', 'Success', 'Error'],
      },
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the textarea',
      control: {
        type: 'radio',
        options: ['Default', 'Variant'],
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    readonly: false,
    label: '',
    labelPosition: 'No label',
    helper: '',
    textcounter: 0,
    rows: 5,
    state: 'None',
    variant: 'Default',
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
  textcounter,
  rows,
  variant,
}) => {
  const maxlength = textcounter > 0 ? `max-length="${textcounter}"` : '';
  const variantValue = variant === 'Variant' ? 'variant' : 'default';
  const stateValue = state.toLowerCase();
  const labelPosLookup = {
    'No label': 'no-label',
    'Inside': 'inside',
    'Outside': 'outside',
  };
  return formatHtmlPreview(`
  <style>
    .demo-wrapper {
      width: 400px;
    }
  </style>
  <div class="demo-wrapper">
        <sdds-textarea
          rows="${rows}"
          state="${stateValue}"
          label="${label}"
          variant="${variantValue}"
          helper="${helper}"
          label-position="${labelPosLookup[labelPosition]}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'read-only' : ''}
          placeholder="${placeholder}"
          ${maxlength}>
        </sdds-textarea>
  </div>
  `);
};

export const Default = Template.bind({});

Default.args = {};
