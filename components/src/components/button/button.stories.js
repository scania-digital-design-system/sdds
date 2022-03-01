/* Default controls */

export default {
  title: 'Component/Button',
  parameters: {
    layout: 'padded',
    chromatic: {
      disableSnapshot: false, // enables snapshotting for the component
    },
  },
  argTypes: {
    btnType: {
      name: 'type',
      defaultValue: 'primary',
      description:
        'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'ghost', 'danger'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['large', 'medium', 'small'],
      },
      defaultValue: 'large',
      description: 'Size of the button',
    },
    fullbleed: {
      type: 'boolean',
      defaultValue: false,
      description: 'Fluid width in certain components',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Choose to disable the button',
    },
    onlyIcon: {
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    icon: {
      type: 'boolean',
      defaultValue: false,
      description: 'Include icon',
    },
  },
};

/**
 * Basic template
 * @param {*} param0
 * @returns Button HTML element
 */

const ButtonTemplate = ({
  size,
  btnType,
  fullbleed,
  text = 'Button',
  disabled = '',
  onlyIcon,
  icon,
}) => {
  let sizeValue = '';
  switch (size) {
    case 'small':
      sizeValue = 'sdds-btn-sm';
      break;
    case 'medium':
      sizeValue = 'sdds-btn-md';
      break;
    default:
      sizeValue = '';
      break;
  }
  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return `
  <sdds-theme></sdds-theme>
  <button class="sdds-btn sdds-btn-${btnType} ${sizeValue} ${fbClass} ${
    disabled ? 'disabled' : ''
  } ${onlyIconCss}">
    <span>${text}</span>
    ${icon ? "<sdds-icon slot='icon' name='scania-cross'></sdds-icon>" : ''}
  </button>
  `;
};

/**
 * Basic template
 * @param {*} param0
 * @returns Web component with button in shadow DOM
 */

const ComponentBtn = ({
  size,
  btnType,
  fullbleed,
  disabled,
  icon,
  text = 'Button',
}) => {
  let sizeValue = '';
  switch (size) {
    default:
      sizeValue = '';
      break;
    case 'medium':
      sizeValue = 'md';
      break;
    case 'small':
      sizeValue = 'sm';
      break;
  }

  // style attribute for <sdds-button fullbleed> needed to allow fullbleed width for child element in shadow DOM.

  return `
  <sdds-theme></sdds-theme>
  <sdds-button 
    type="${btnType}" 
    size="${sizeValue}" 
    ${disabled ? 'disabled' : ''} 
    ${fullbleed ? 'fullbleed style="width: 100%"' : ''} 
    text="${text}"> 
    ${icon ? "<sdds-icon slot='icon' name='scania-cross'></sdds-icon>" : ''} 
  </sdds-button>
  `;
};

/** Stories exported to Storybook */

/** Button type representatives (equivalence classes) */

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

/** Variants of button. Shown only on primary button */

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

/** Button as web component */
export const sddsButton = ComponentBtn.bind({});
sddsButton.args = {
  text: 'Button',
};
