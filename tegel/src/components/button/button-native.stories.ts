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
    },
    btnType: {
      name: 'Type',
      description: 'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: { Primary: 'primary', Secondary: 'secondary', Ghost: 'ghost', Danger: 'danger' },
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: { Large: 'lg', Medium: 'md', Small: 'sm', ExtraSmall: 'xs' },
      },
      table: {
        defaultValue: { summary: 'lg' },
      },
      description: 'Size of the button',
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
        options: { 'On light': 'on-light', 'On dark': 'on-dark' },
      },
      description: 'Button variant.',
      table: {
        defaultValue: { summary: 'on-dark' },
      },
    },
    fullbleed: {
      name: 'Fullbleed',
      type: 'boolean',
      defaultValue: false,
      description: 'Fluid width in certain components-old',
      table: {
        defaultValue: { summary: false },
      },
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
      if: { arg: 'size', neq: 'xs' },
    },
    icon: {
      name: 'Icon',
      description: 'Icon to display on the button. Choose "none" to exclude the icon.',
      control: {
        type: 'select',
        options: ['none', ...iconsNames],
      },
      if: { arg: 'size', neq: 'xs' },
    },
  },
};

const NativeTemplate = ({ size, variant, btnType, fullbleed, text = 'Button', disabled = '', onlyIcon, icon }) => {
  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  return formatHtmlPreview(
    `
  <button class="sdds-btn sdds-btn-${btnType} sdds-btn-${size} ${fbClass} ${disabled ? 'disabled' : ''} ${onlyIconCss} ${
      variant === 'on-light' ? 'sdds-on-white-bg' : ''
    }" ${inlineStyle}>
    ${!onlyIcon ? `<span class="sdds-btn-text">${text}</span>` : ''}
    ${onlyIcon || (icon && icon !== 'none') ? `<sdds-icon class='sdds-btn-icon ' size='${size == 'sm' ? '16px' : '20px'}' name='${icon}'></sdds-icon>` : ''}
  </button>
  `,
  );
};

const defaultValues = {
  text: 'Button',
  btnType: 'primary',
  size: 'lg',
  variant: 'on-dark',
  fullbleed: false,
  disabled: false,
  onlyIcon: false,
  icon: 'none',
};

export const Native = NativeTemplate.bind({});
Native.args = {
  ...defaultValues,
};

export const NativeWithIcon = NativeTemplate.bind({});
NativeWithIcon.args = {
  ...defaultValues,
  icon: 'truck',
};

export const NativeOnlyIcon = NativeTemplate.bind({});
NativeOnlyIcon.args = {
  ...defaultValues,
  text: '',
  onlyIcon: true,
  icon: 'truck',
};
