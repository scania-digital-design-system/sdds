export default {
  title: 'Component/Button',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options:['default', 'small', 'medium']
      },
      defaultValue: 'default',
      description: 'Size of the button'
    },
    btnType: {
      name: 'type',
      defaultValue: 'primary',
      description: 'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost', 'danger']
      }
    },
    fullbleed: {
      type: 'boolean',
      defaultValue: false,
      description:'Fluid width in certain components'
    },
    disabled: {
      defaultValue: '',
      table: {
        disable:true
      }
    },
    onlyIcon: {
      defaultValue: false,
      table: {
        disable:true
      }
    }
  }
};

const ButtonTemplate = ({size, btnType, fullbleed, text='Button', withIcon, disabled='', onlyIcon}) => {
  let sizeValue='';
  switch (size) {
    case 'small':
      sizeValue = 'sdds-btn-sm';
      break;
    case 'medium':
      sizeValue = 'sdds-btn-md';
      break;
    default: sizeValue= '';
      break;
  }
  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const inlineStyle = fullbleed ? 'style="width:200px;"':'';
  const iconHTML = withIcon ? `
  <span class='sdds-btn-icon'>
    <c-icon name='scania-cross'></c-icon>
  </span>
  ` : '';

  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  return `
  <c-theme name="scania" global="true"></c-theme>
  <button class="sdds-btn sdds-btn-${btnType} ${sizeValue} ${fbClass} ${disabled} ${onlyIconCss}" ${inlineStyle}>
    ${text}
    ${iconHTML}
  </button>   
  `
};

const ComponentBtn = () => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <sdds-button type="primary" size="md" disabled="" fullbleed="true" text="Button"><c-icon name='scania-cross'></c-icon></sdds-button>
  `
};

export const Basic = ButtonTemplate.bind({});
Basic.args = {
  text: 'Button'
}

export const WithIcon = ButtonTemplate.bind({});
WithIcon.args = {
  text: 'Button with Icon',
  withIcon: true
}

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  disabled:'disabled',
  text: 'Button Disabled',
  withIcon: false
}

export const onlyIcon = ButtonTemplate.bind({});
onlyIcon.args = {
  text: `<c-icon name='scania-cross'></c-icon>`,
  onlyIcon: true
}

export const sddsButton = ComponentBtn.bind({});
sddsButton.args = {}