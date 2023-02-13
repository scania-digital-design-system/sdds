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
    type: {
      name: 'Type',
      description: 'Set the field to display date, time or both',
      control: {
        type: 'radio',
      },
      options: ['Datetime', 'Date', 'Time'],
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
    size: {
      name: 'Size',
      description: 'Switch between different sizes',
      control: {
        type: 'radio',
        // todo: make consistent with other sizes, for example 'xs', 'sm', etc
      },
      options: ['Large', 'Medium', 'Small'],
    },
    minWidth: {
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Set textfield to disabled state',
      name: 'Disabled',
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
    state: {
      name: 'State',
      description: 'Switch between success or error state',
      control: {
        type: 'radio',
      },
      options: ['None', 'Success', 'Error'],
    },
  },
  args: {
    type: 'Datetime',
    size: 'Large',
    defaultValue: 'None',
    minWidth: 'Default',
    disabled: false,
    state: 'None',
    label: true,
    labelText: 'Label text',
    helper: true,
    helperText: 'Helper text',
    modeVariant: 'Inherit from parent',
  },
};

const datetimeTemplate = ({
  modeVariant,
  type,
  size,
  minWidth,
  disabled,
  label,
  labelText,
  state,
  helper,
  helperText,
  defaultValue,
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
    }
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
      id="datetime"
      ${defaultValue !== 'None' ? `default-value="${getDefaultValue(defaultValue, type)}"` : ''}
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"`: ''}
      type="${typeLookup[type]}"
      size="${sizeLookup[size]}"
      state="${stateLookup[state]}"
      ${disabled ? 'disabled' : ''}
      ${minWidth ? 'no-min-width' : ''}
      ${label ? `label="${labelText}" ` : ''}
      ${helper ? `helper="${helperText}" ` : ''}
      >
    </sdds-datetime>


    <script>


    /* You can listen for the 'customChange' event to get value updates. */
      const datetimeEl = document.getElementById('datetime');
      datetimeEl.addEventListener('customChange', (event) => {
        console.log(event.target.value);
      });


    </script>
  </div>`,
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
