export default {
  title: 'Components/Button/WebComponent',
  parameters: {
    layout: 'padded',
    chromatic: {
      disableSnapshot: false,
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
      description: 'Full width of its parent',
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

/**
 * Basic template
 * @param {*} param0
 * @returns Button HTML element
 */

const ComponentBtn = ({ size, btnType, fullbleed, disabled, icon, text = 'Button' }) => {
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
  }

  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';

  return `
  <sdds-button type="${btnType}" size="${sizeValue}" ${disabled ? 'disabled' : ''} ${fullbleed ? 'fullbleed' : ''} text="${text}" ${inlineStyle}> ${
    icon ? "<sdds-icon slot='icon' name='scania-cross'></sdds-icon>" : ''
  } </sdds-button>
  `;
};

export const sddsButton = ComponentBtn.bind({});
sddsButton.args = {
  text: 'Button',
};
