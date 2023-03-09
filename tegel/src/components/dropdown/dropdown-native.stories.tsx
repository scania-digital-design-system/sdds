import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
    ],
  },
  argTypes: {
    state: {
      name: 'Error state',
      description: 'Puts the component in error state.',
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'Size',
      description: 'Size of the dropdown',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
    },
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      description: 'Label text helps to describe what the dropdown contains',
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      description: 'Helper text assists the user with additional information about the dropdown',
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    state: false,
    size: 'Large',
    label: '',
    helper: '',
    disabled: false,
  },
};

const NativeTemplate = ({ 
  state, 
  size, 
  label, 
  helper, 
  disabled 
}) => {
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  return formatHtmlPreview(`
  <style>
/* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
  }
</style>

<div class="demo-wrapper">
       <div class="sdds-dropdown ${size !== 'Large' ? `sdds-dropdown-${sizeLookup[size]}` : ''} ${
    state ? 'sdds-dropdown--error' : ''
  }" >
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
};

export const Native = NativeTemplate.bind({});
