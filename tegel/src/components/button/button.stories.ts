import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray.js';

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
      defaultValue: 'Button',
    },
    btnType: {
      name: 'Type',
      description: 'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: ['Primary', 'Secondary', 'Ghost', 'Danger'],
      },
      defaultValue: 'Primary',
    },
    size: {
      name: 'Soze',
      control: {
        type: 'radio',
        options: ['Large', 'Medium', 'Small', 'Extra Small'],
      },
      defaultValue: 'Large',
      description: 'Size of the button',
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
        options: ['Default', 'Variant'],
      },
      defaultValue: 'Default',
      description: 'Button variant.',
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
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    icon: {
      name: 'Icon',
      description: 'Icon to display on the button. Choose "none" to exclude the icon.',
      control: {
        type: 'select',
        options: ['none', ...iconsNames],
      },
      defaultValue: 'none',
      if: { arg: 'size', neq: 'Extra Small' },
    },
  },
};

const NativeTemplate = ({ size, variant, btnType, fullbleed, text = 'Button', disabled = '', onlyIcon, icon }) => {
  let sizeValue = '';
  switch (size) {
    case 'Large':
      sizeValue = 'lg';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    case 'Small':
      sizeValue = 'sm';
      break;
    case 'Extra Small':
      sizeValue = 'xs';
      break;
    default:
      sizeValue = 'lg';
      break;
  }

  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';
  const btnTypeValue = btnType.toLowerCase();

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return formatHtmlPreview(
    `
  <button class="sdds-btn sdds-btn-${btnTypeValue} sdds-btn-${sizeValue} ${fbClass} ${disabled ? 'disabled' : ''} ${onlyIconCss} ${
      variant === 'Variant' ? 'sdds-on-white-bg' : ''
    }" ${inlineStyle}>
    ${!onlyIcon ? `<span class="sdds-btn-text">${text}</span>` : ''}
    ${onlyIcon || (icon && icon !== 'none') ? `<sdds-icon class='sdds-btn-icon ' size='${size == 'Small' ? '16px' : '20px'}' name='${icon}'></sdds-icon>` : ''}
  </button>
  `,
  );
};

const WebComponentTemplate = ({ onlyIcon, size, variant, btnType, fullbleed, disabled, icon, text = 'Button' }) => {
  let sizeValue = '';
  switch (size) {
    case 'Large':
      sizeValue = 'lg';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    case 'Small':
      sizeValue = 'sm';
      break;
    case 'Extra Small':
      sizeValue = 'xs';
      break;
    default:
      sizeValue = 'lg';
      break;
  }

  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const variantValue = variant === 'Variant' ? 'variant' : 'default';

  const btnTypeValue = btnType.toLowerCase();
  return formatHtmlPreview(
    `
  <sdds-button onlyIcon="${onlyIcon}" type="${btnTypeValue}" size="${sizeValue}" ${disabled ? 'disabled' : ''} ${
      fullbleed ? 'fullbleed' : ''
    } text="${text}" ${inlineStyle} variant="${variantValue}" > ${
      onlyIcon || icon ? `<sdds-icon slot='icon' size='${size == 'Small' ? '16px' : '20px'}' name=${icon}></sdds-icon>` : ''
    } </sdds-button>
  `,
  );
};

export const Primary = NativeTemplate.bind({});
Primary.args = {
  text: 'Button',
};

export const NativeWithIcon = NativeTemplate.bind({});
NativeWithIcon.args = {
  text: 'Button',
  icon: 'truck',
};

export const NativeOnlyIcon = NativeTemplate.bind({});
NativeOnlyIcon.args = {
  onlyIcon: true,
  icon: 'truck',
};

NativeOnlyIcon.argTypes = {};

/** Button as web component */
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {
  text: 'Button',
};

export const WebComponentWithButton = WebComponentTemplate.bind({});
WebComponentWithButton.args = {
  text: 'Button',
  icon: 'truck',
};

export const WebComponentOnlyIcon = WebComponentTemplate.bind({});
WebComponentOnlyIcon.args = {
  text: '',
  onlyIcon: true,
  icon: 'truck',
};
