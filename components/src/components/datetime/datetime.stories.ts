import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Datetime',
  parameters: {
    notes: readme,
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Which type of textfield',
      control: {
        type: 'radio',
        options: ['datetime-local', 'date', 'time'],
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
      name: 'Min width',
      description: 'Toggle min width',
      control: {
        type: 'radio',
        options: ['Default', 'No min width'],
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
        options: ['none', 'success', 'error'],
      },
    },
  },
  args: {
    type: 'datetime-local',
    size: 'Large',
    minWidth: 'Default',
    disabled: false,
    state: 'default',
    label: 'Label text',
    helper: 'Helper text',
  },
};

const datetimeTemplate = ({ type, size, minWidth, disabled, label, state, helper }) => {
  let sizeValue;
  switch (size) {
    case 'Small':
      sizeValue = 'sm';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    default:
      break;
  }
  let minWidthValue = false;
  switch (minWidth) {
    case 'No min width':
      minWidthValue = true;
      break;
    default:
      break;
  }

  return formatHtmlPreview(
    `
  <div style="width: 208px">
    <sdds-datetime
    id="datetime"
      type="${type}"
      ${sizeValue ? `size="${sizeValue}"` : ''}
      state="${state}"
      ${disabled ? 'disabled' : ''}
      ${minWidthValue ? 'noMinWidth' : ''} >
      ${label ? `<label slot='sdds-label'>${label}</label>` : ''}
      ${helper ? `<span slot='sdds-helper'>${helper}</span>` : ''}
    </sdds-datetime>
    <!-- You can listen for the 'customChange' event to get value updates. -->
    <script>
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
  state: 'error',
  helper: 'Helper text',
  label: 'Label text',
};

export const Time = datetimeTemplate.bind({});

Time.args = {
  type: 'time',
};

export const Date = datetimeTemplate.bind({});

Date.args = {
  type: 'date',
};
