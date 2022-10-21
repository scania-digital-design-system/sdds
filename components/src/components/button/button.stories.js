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
    buttonText: {
      name: 'Text',
      control: {
        type: 'text',
      },
    },
    btnType: {
      name: 'Type',
      defaultValue: 'primary',
      description:
        'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'ghost', 'danger'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['lg', 'md', 'sm', 'xs'],
      },
      defaultValue: 'large',
      description: 'Size of the button',
    },
    fullbleed: {
      name: 'Enable fullbleed',
      type: 'boolean',
      defaultValue: false,
      description: 'Fluid width in certain tegel-old',
    },
    disabled: {
      name: 'Disabled state',
      type: 'boolean',
      defaultValue: false,
      description: 'Choose to disable the button',
    },
    onlyIcon: {
      name: 'Show icon',
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    icon: {
      name: 'Show icon',
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
  buttonText,
  disabled = '',
  onlyIcon,
  icon,
}) => {
  let sizeValue = '';
  switch (size) {
    case 'xs':
      sizeValue = 'sdds-btn-xs';
      break;
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
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon-only' : '';

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return `
  <button class="sdds-btn sdds-btn-${btnType} ${sizeValue} ${fbClass} ${
    disabled ? 'disabled' : ''
  } ${onlyIconCss}" ${inlineStyle}>
    ${buttonText}
    ${
      icon && (size === 'lg' || size === 'md')
        ? "<span class='sdds-btn-icon'><sdds-icon slot='icon' name='chevron_right' size='20px'></sdds-icon></span>"
        : ''
    } 
    ${
      icon && size === 'sm'
        ? "<span class='sdds-btn-icon'><sdds-icon slot='icon' name='chevron_right'></sdds-icon></span>"
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
  buttonText,
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
    case 'md':
      sizeValue = 'md';
      break;
    case 'sm':
      sizeValue = 'sm';
      break;
    case 'xs':
      sizeValue = 'xs';
      break;
  }

  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';

  return `
  <sdds-button 
    type="${btnType}" 
    size="${sizeValue}" 
    disabled="${disabled}"
    fullbleed="${fullbleed}" 
    text="${buttonText}" 
    ${inlineStyle}
    > 
      ${
        icon && (size === 'lg' || size === 'md')
          ? "<sdds-icon slot='icon' name='chevron_right' size='20px'></sdds-icon>"
          : ''
      } 
      
      ${
        icon && size === 'sm'
          ? "<sdds-icon slot='icon' name='chevron_right' ></sdds-icon>"
          : ''
      }
  </sdds-button>
  `;
};

/** Stories exported to Storybook */

/** Button type representatives (equivalence classes) */

export const Native = ButtonTemplate.bind({});
Native.args = {
  buttonText: 'Button',
  size: 'lg',
};

export const NativeOnlyIcon = ButtonTemplate.bind({});
NativeOnlyIcon.args = {
  buttonText: "<sdds-icon slot='icon' name='chevron_right'></sdds-icon>",
  size: 'lg',
  onlyIcon: true,
};

/** Button as web component */
export const WebComponent = ComponentBtn.bind({});
WebComponent.args = {
  buttonText: 'Button',
  size: 'lg',
};
