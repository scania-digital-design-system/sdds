import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'padded',
    chromatic: {
      disableSnapshot: false, // enables snapshotting for the component
    },
  },
  argTypes: {
    text: {
      name: 'Text',
      description: 'The text to be displayed on the button',
      control: {
        type: 'text',
      },
    },
    btnType: {
      name: 'Type',
      description:
        'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
      },
      options: ['Primary', 'Secondary', 'Ghost', 'Danger'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      name: 'Size',
      description: 'Size of the button',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    variant: {
      name: 'Variant',
      description: 'Button variant.',
      control: {
        type: 'radio',
      },
      options: ['On light', 'On dark'],
      table: {
        defaultValue: { summary: 'on-dark' },
      },
    },
    fullbleed: {
      name: 'Fullbleed',
      defaultValue: false,
      description: 'Fluid width in certain components-old',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'onlyIcon', eq: false },
    },
    disabled: {
      name: 'Disabled',
      type: 'boolean',
      description: 'Choose to disable the button',
      table: {
        defaultValue: { summary: false },
      },
    },
    onlyIcon: {
      name: 'Only Icon',
      description: 'Displays only the icon and excludes any text from the button',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      if: { arg: 'size', neq: 'Extra small' },
    },
    icon: {
      name: 'Icon',
      description: 'Icon to display on the button. Choose "none" to exclude the icon.',
      control: {
        type: 'select',
      },
      options: ['none', ...iconsNames],
      if: { arg: 'size', neq: 'Extra small' },
    },
    iconType: {
      name: 'Icon type',
      description: 'Native/Webcomponent',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Webcomponent'],
      if: { arg: 'icon', neq: 'none' },
    },
  },
  args: {
    text: 'Button',
    btnType: 'Primary',
    size: 'Large',
    variant: 'On dark',
    fullbleed: false,
    disabled: false,
    onlyIcon: false,
    icon: 'none',
    iconType: 'Native',
  },
};

const NativeTemplate = ({
  size,
  variant,
  btnType,
  fullbleed,
  text = 'Button',
  disabled = '',
  onlyIcon,
  icon,
  iconType,
}) => {
  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';
  const btnTypeLookUp = {
    Primary: 'primary',
    Secondary: 'secondary',
    Ghost: 'ghost',
    Danger: 'danger',
  };
  const sizeLookUp = {
    'Large': 'lg',
    'Medium': 'md',
    'Small': 'sm',
    'Extra small': 'xs',
  };

  const varaintLookup = {
    'On light': 'on-light',
    'On dark': 'on-dark',
  };

  return formatHtmlPreview(
    `
  <style>
    ${
      icon && iconType === 'Native'
        ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    i.sdds-btn-icon{
      font-size: ${size === 'Small' ? '16' : '20'}px;
    }`
        : ''
    }
    .demo-wrapper{
      width: 100%;
    }
  </style>

  <div class="demo-wrapper">
<button class="sdds-btn sdds-btn-${btnTypeLookUp[btnType]} sdds-btn-${
      sizeLookUp[size]
    } ${fbClass} ${disabled ? 'disabled' : ''} ${onlyIconCss} ${
      varaintLookup[variant] === 'on-light' ? 'sdds-on-white-bg' : ''
    }  ${onlyIcon ? 'sdds-btn-only-icon' : ''}">
  ${!onlyIcon ? `<span class="sdds-btn-text">${text}</span>` : ''}
  ${
    onlyIcon || (icon && icon !== 'none')
      ? `
    ${
      iconType === 'Native'
        ? `<i class="sdds-btn-icon sdds-icon ${icon}"></i>`
        : `<sdds-icon class='sdds-btn-icon ' size='${
            sizeLookUp[size] == 'sm' ? '16px' : '20px'
          }' name='${icon}'></sdds-icon>`
    }
  `
      : ''
  }
</button>
  </div>
  `,
  );
};

export const Native = NativeTemplate.bind({});
Native.args = {};

export const NativeWithIcon = NativeTemplate.bind({});
NativeWithIcon.args = {
  icon: 'truck',
};

export const NativeOnlyIcon = NativeTemplate.bind({});
NativeOnlyIcon.args = {
  text: '',
  onlyIcon: true,
  icon: 'truck',
};
