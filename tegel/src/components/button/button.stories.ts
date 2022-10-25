import { formatHtmlPreview } from '../../utils/utils';

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
      type: 'boolean',
      defaultValue: false,
      description: 'Include icon',
      control: {
        type: 'boolean',
      },
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
    <span>${text}</span>
    ${icon ? "<span class='sdds-btn-icon'><sdds-icon name='scania-cross'></sdds-icon></span>" : ''}
  </button>
  `,
  );
};

const WebComponentTemplate = ({ size, variant, btnType, fullbleed, disabled, icon, text = 'Button' }) => {
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
  return formatHtmlPreview(
    `
  <sdds-button type="${btnType}" size="${sizeValue}" ${disabled ? 'disabled' : ''} ${fullbleed ? 'fullbleed' : ''} text="${text}" ${inlineStyle} variant="${variantValue}" > ${
      icon ? "<sdds-icon slot='icon' name='scania-cross'></sdds-icon>" : ''
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
  icon: true,
};

export const NativeOnlyIcon = NativeTemplate.bind({});
NativeOnlyIcon.args = {
  text: "<sdds-icon name='scania-cross'></sdds-icon>",
  onlyIcon: true,
};

NativeOnlyIcon.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
};

/** Button as web component */
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {
  text: 'Button',
};
