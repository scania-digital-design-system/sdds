import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      name: 'Label',
      type: 'string',
      description: 'Label text helps to describe what the dropdown contains',
      defaultValue: '',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: { Large: 'large', Medium: 'medium', Small: 'small' },
      },
      defaultValue: 'large',
      description: 'Size of the dropdown',
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component',
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

const NativeTemplate = ({ disabled, size, helper, label, state }) =>
  formatHtmlPreview(`
    <div style="width:300px">
        <div class="sdds-dropdown ${size !== 'lg' ? `sdds-dropdown-${size}` : ''} ${state === 'error' ? 'sdds-dropdown--error' : ''}" >
        ${label !== '' ? `<span class="sdds-dropdown-label-outside">${label}</span> ` : ''}
        <select 
        name="nativeDropdown" 
        id="mySelect"
        ${disabled ? `disabled` : ''} >
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
          ${helper !== '' ? `<span class="sdds-dropdown-helper">${helper}</span>` : ''}
        </div>
      </div>
  `);

export const Native = NativeTemplate.bind({});
