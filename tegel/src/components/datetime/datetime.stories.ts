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
      description: 'Label text for specific textfield',
      name: 'Label text',
      control: {
        type: 'text',
      },
    },

    helper: {
      name: 'Helper text',
      description: 'Add helper text for the textfield',
      control: {
        type: 'text',
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
  },
  args: {
    type: 'Datetime',
    size: 'Large',
    minWidth: 'Default',
    disabled: false,
    state: 'None',
    label: 'Label text',
    helper: 'Helper text',
  },
};

const datetimeTemplate = ({ type, size, minWidth, disabled, label, state, helper }) => {
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
      type="${typeLookup[type]}"
      size="${sizeLookup[size]}"
      state="${stateLookup[state]}"
      ${disabled ? 'disabled' : ''}
      ${minWidth ? 'no-min-width' : ''}>
      ${label ? `<label slot='sdds-label'>${label}</label>` : ''}
      ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
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
  helper: 'Helper text',
  label: 'Label text',
};

export const Time = datetimeTemplate.bind({});

Time.args = {
  type: 'Time',
};

export const Date = datetimeTemplate.bind({});

Date.args = {
  type: 'Date',
};
