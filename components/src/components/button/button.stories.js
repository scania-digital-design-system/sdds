/* Default controls */

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'padded',
    chromatic: {
      disableSnapshot: false, // enables snapshotting for the component
    },
  },
  argTypes: {
    btnType: {
      name: 'Type',
      defaultValue: 'primary',
      description: 'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'ghost', 'danger'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['sm', 'md'],
      },
      defaultValue: 'md',
      description: 'Size of the button',
    },
    fullbleed: {
      name: 'Fullbleed',
      type: 'boolean',
      defaultValue: false,
      description: 'Fluid width in certain components-old',
    },
    disabled: {
      name: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Choose to disable the button',
    },
    onlyIcon: {
      name: 'Only Icon',
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    icon: {
      name: 'Icon',
      type: 'boolean',
      defaultValue: false,
      description: 'Include icon',
    },
  },
};

const ButtonTemplate = ({ size, btnType, fullbleed, text = 'Button', disabled = '', onlyIcon, icon }) => {
  let sizeValue = '';
  switch (size) {
    case 'sm':
      sizeValue = 'sdds-btn-sm';
      break;
    case 'md':
      sizeValue = 'sdds-btn-md';
      break;
    default:
      sizeValue = '';
      break;
  }
  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return `
  <button class="sdds-btn sdds-btn-${btnType} ${sizeValue} ${fbClass} ${disabled ? 'disabled' : ''} ${onlyIconCss}" ${inlineStyle}>
    <span>${text}</span>
    ${icon ? "<span class='sdds-btn-icon'><sdds-icon name='scania-cross'></sdds-icon></span>" : ''}
  </button>
  `;
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  text: 'Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  btnType: 'secondary',
  text: 'Button',
};

export const Ghost = ButtonTemplate.bind({});
Ghost.args = {
  btnType: 'ghost',
  text: 'Button',
};

export const Danger = ButtonTemplate.bind({});
Danger.args = {
  btnType: 'danger',
  text: 'Button',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  disabled: 'disabled',
  text: 'Button',
};

export const withIcon = ButtonTemplate.bind({});
withIcon.args = {
  text: 'Button',
  icon: true,
};

export const onlyIcon = ButtonTemplate.bind({});
onlyIcon.args = {
  text: "<sdds-icon name='scania-cross'></sdds-icon>",
  onlyIcon: true,
};

onlyIcon.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
};

export const Medium_Size_W_Icon = ButtonTemplate.bind({});
Medium_Size_W_Icon.args = {
  size: 'medium',
  text: 'Button',
  icon: true,
};

export const Small_Size_W_Icon = ButtonTemplate.bind({});
Small_Size_W_Icon.args = {
  size: 'small',
  text: 'Button',
  icon: true,
};

export const Fullbleed = ButtonTemplate.bind({});
Fullbleed.args = {
  text: 'Button',
  fullbleed: true,
  icon: true,
};
