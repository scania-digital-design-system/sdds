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
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return `
  <sdds-theme></sdds-theme>
  <button class="sdds-btn sdds-btn-${btnType} ${sizeValue} ${fbClass} ${
    disabled ? 'disabled' : ''
  } ${onlyIconCss}" ${inlineStyle}>
    <span>${text}</span>
    ${
      icon
        ? '<svg class="sdds-btn-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.744 8.48a1 1 0 0 1 .004 1.413 2709.096 2709.096 0 0 1-9.899 9.909 1642.18 1642.18 0 0 0-4.806 4.805 1 1 0 0 1-1.416.001l-7.355-7.362a1 1 0 0 1 1.415-1.414l6.646 6.653a2024.31 2024.31 0 0 1 5.35-5.342c2.362-2.356 5.155-5.146 8.647-8.66a1 1 0 0 1 1.414-.004Z" fill="currentColor"/></svg>'
        : ''
    }
  </button>
  `;
};

/**
 * Basic template
 * @param {*} param0
 * @returns Button as a web component
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

  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';

  return `
  <sdds-theme></sdds-theme>
  <sdds-button type="${btnType}" size="${sizeValue}" ${
    disabled ? 'disabled' : ''
  } ${fullbleed ? 'fullbleed' : ''} text="${text}" ${inlineStyle}> ${
    icon
      ? '<svg class="sdds-btn-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.744 8.48a1 1 0 0 1 .004 1.413 2709.096 2709.096 0 0 1-9.899 9.909 1642.18 1642.18 0 0 0-4.806 4.805 1 1 0 0 1-1.416.001l-7.355-7.362a1 1 0 0 1 1.415-1.414l6.646 6.653a2024.31 2024.31 0 0 1 5.35-5.342c2.362-2.356 5.155-5.146 8.647-8.66a1 1 0 0 1 1.414-.004Z" fill="currentColor"/></svg>'
      : ''
  } </sdds-button>
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
