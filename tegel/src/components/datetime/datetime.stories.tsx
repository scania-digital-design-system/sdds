import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Datetime',
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10241%3A40193&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10241%3A40193&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant of the component.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
      },
      options: ['None', 'Success', 'Error'],
    },
    type: {
      name: 'Type',
      description: 'Set the field to display date, time or both',
      control: {
        type: 'radio',
      },
      options: ['Datetime', 'Date', 'Time'],
    },
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        // todo: make consistent with other sizes, for example 'xs', 'sm', etc
      },
      options: ['Large', 'Medium', 'Small'],
    },
    defaultValue: {
      name: 'Default value',
      description:
        'Default value of the component. Format for time: HH-MM. Format for date: YY-MM-DD. Format for date-time: YY-MM-DDTHH-MM ',
      control: {
        type: 'radio',
      },
      options: ['None', 'Custom'],
    },
    minWidth: {
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'Label',
      description: 'Add/remove a label text for the component',
      control: {
        type: 'boolean',
      },
    },
    labelText: {
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
      if: { arg: 'label', eq: true },
    },
    helper: {
      name: 'Helper',
      description: 'Add/remove a helper text for the component',
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
      },
      if: { arg: 'helper', eq: true },
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    state: 'None',
    type: 'Datetime',
    size: 'Large',
    defaultValue: 'None',
    minWidth: 'Default',
    label: true,
    labelText: 'Label text',
    helper: true,
    helperText: 'Helper text',
    disabled: false,
  },
};

const datetimeTemplate = ({
  modeVariant,
  state,
  type,
  size,
  defaultValue,
  minWidth,
  label,
  labelText,
  helper,
  helperText,
  disabled,
}) => {
  const typeLookup = {
    Datetime: 'datetime-local',
    Date: 'date',
    Time: 'time',
  };
  const sizeLookup = {
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  };
  const stateLookup = {
    None: 'none',
    Success: 'success',
    Error: 'error',
  };

  const getDefaultValue = (value: string, componentType: string) => {
    if (value === 'Custom') {
      switch (componentType) {
        case 'Datetime':
          return '1891-01-01T12:30';
        case 'Date':
          return '1891-01-01';
        case 'Time':
          return '12:30';
        default:
          return 'Invalid type';
      }
    } else return false;
  };

  return formatHtmlPreview(
    `
    <style>
        /* Note: Demo classes used here are just for demo purposes in Storybook */
        .demo-wrapper {
            width: 208px;
        }
    </style>

    <div class="demo-wrapper">
      <sdds-datetime
        id="storybook-datetime"
        name="datetime-input"
        ${defaultValue !== 'None' ? `default-value="${getDefaultValue(defaultValue, type)}"` : ''}
        ${
          modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''
        }
        type="${typeLookup[type]}"
        size="${sizeLookup[size]}"
        state="${stateLookup[state]}"
        ${disabled ? 'disabled' : ''}
        ${minWidth ? 'no-min-width' : ''}
        ${label ? `label="${labelText}" ` : ''}
        ${helper ? `helper="${helperText}" ` : ''}
        >
      </sdds-datetime>
    </div>

    <script>
    /* DEMO Code: Used only for Storybook demo purposes */
      datetimeElement = document.getElementById('storybook-datetime');
      datetimeElement.addEventListener('sddsChange', (event) => {
        console.log("Firing sddsChange: " + event.target.value);
      });
      datetimeElement.addEventListener('sddsFocus', (event) => {
        console.log("Firing sddsFocus: " + event.target.value);
      });
      datetimeElement.addEventListener('sddsBlur', (event) => {
        console.log("Firing sddsBlur: " + event.target.value);
      });
    </script>
`,
  );
};

export const Default = datetimeTemplate.bind({});

Default.args = {};

export const ErrorState = datetimeTemplate.bind({});

ErrorState.args = {
  state: 'Error',
};

export const Time = datetimeTemplate.bind({});

Time.args = {
  type: 'Time',
};

export const Date = datetimeTemplate.bind({});

Date.args = {
  type: 'Date',
};
