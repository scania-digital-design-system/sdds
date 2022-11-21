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
      },
      options: ['Primary', 'Secondary', 'Ghost', 'Danger'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
      description: 'Size of the button',
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
      },
      options: ['On light', 'On dark'],
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
      if: { arg: 'onlyIcon', truthy: false },
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
    iconType: 'Webcomponent',
  },
};

const WebComponentTemplate = ({ onlyIcon, size, variant, btnType, fullbleed, disabled, icon, iconType, text = 'Button' }) => {
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
  <sdds-button ${onlyIcon ? 'onlyIcon' : ''} type="${btnTypeLookUp[btnType]}" size="${sizeLookUp[size]}" ${disabled ? 'disabled' : ''} ${fullbleed ? 'fullbleed' : ''} text="${
      onlyIcon ? '' : text
    }" variant="${varaintLookup[variant]}" >
    ${
      onlyIcon || (icon && icon !== 'none')
        ? `
    ${
      iconType === 'Native'
        ? `<i class="sdds-btn-icon sdds-icon ${icon}" slot="icon"></i>`
        : `<sdds-icon slot="icon" class='sdds-btn-icon ' size='${sizeLookUp[size] == 'sm' ? '16px' : '20px'}' name='${icon}'></sdds-icon>`
    }
  `
        : ''
    }   
</sdds-button>
  `,
  );
};

/** Button as web component */
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {};

export const WebComponentWithIcon = WebComponentTemplate.bind({});
WebComponentWithIcon.args = {
  icon: 'truck',
  iconType: 'Webcomponent',
};

export const WebComponentOnlyIcon = WebComponentTemplate.bind({});
WebComponentOnlyIcon.args = {
  text: '',
  iconType: 'Webcomponent',
  onlyIcon: true,
  icon: 'truck',
};
