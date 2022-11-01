import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    labelNative: {
      name: 'Label native',
      control: 'boolean',
      defaultValue: false,
      description: 'Label text helps to describe what the dropdown contains',
    },
    label: {
      name: 'Label',
      type: 'string',
      defaultValue: 'Label text',
      description: 'Label text helps to describe what the dropdown contains',
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    state: {
      name: 'State',
      control: {
        type: 'radio',
      },
      options: {
        Default: 'default',
        Error: 'error',
      },
      defaultValue: 'default',
      description: 'Support error state',
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      defaultValue: '',
      description: 'Helper text assists the user with additional information about the dropdown',
    },
  },
};

const NativeTemplate = ({ size, helper = '', label, state, labelNative }) =>
  formatHtmlPreview(`
    <div style="width:300px">
        <div class="sdds-dropdown ${size !== 'lg' ? `sdds-dropdown-${size}` : ''} ${state === 'error' ? 'sdds-dropdown--error' : ''}" >
        ${labelNative ? `<span class="sdds-dropdown-label-outside">${label}</span> ` : ''}
        <select name="nativeDropdown" id="mySelect">
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
          <span class="sdds-dropdown-helper">${helper}</span>
        </div>
      </div>
  `);

export const Native = NativeTemplate.bind({});
