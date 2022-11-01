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
      },
      options: ['none', ...iconsNames],
      if: { arg: 'size', neq: 'xs' },
    },
  },
};

const WebComponentTemplate = ({ onlyIcon, size, variant, btnType, fullbleed, disabled, icon, text = 'Button' }) => {
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const variantValue = variant === 'Variant' ? 'variant' : 'default';
  return formatHtmlPreview(
    `
  <sdds-button onlyIcon="${onlyIcon}" type="${btnType}" size="${size}" ${disabled ? 'disabled' : ''} ${
      fullbleed ? 'fullbleed' : ''
    } text="${text}" ${inlineStyle} variant="${variantValue}" >
    ${onlyIcon || (icon && icon !== 'none') ? `<sdds-icon slot='icon' class='sdds-btn-icon'  size='${size == 'sm' ? '16px' : '20px'}' name='${icon}'></sdds-icon>` : ''}  
  </sdds-button>
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

/** Button as web component */
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {
  ...defaultValues,
};

export const WebComponentWithIcon = WebComponentTemplate.bind({});
WebComponentWithIcon.args = {
  ...defaultValues,
  icon: 'truck',
};

export const WebComponentOnlyIcon = WebComponentTemplate.bind({});
WebComponentOnlyIcon.args = {
  ...defaultValues,
  text: '',
  onlyIcon: true,
  icon: 'truck',
};
