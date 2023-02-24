import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';
import readme from './readme.md';

export default {
  title: 'Components/Button',
  parameters: {
    notes: readme,
    layout: 'padded',
    chromatic: {
      disableSnapshot: false, // enables snapshotting for the component
    },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1574%3A72148&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=1574%3A72148&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      description: 'Button mode variant.',
      table: {
        defaultValue: { summary: 'Inherit from parent' },
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
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
      description: 'Size of the button',
    },
    text: {
      name: 'Text',
      description: 'The text to be displayed on the button',
      control: {
        type: 'text',
      },
      if: { arg: 'onlyIcon', truthy: false },
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
      table: {
        defaultValue: { summary: 'none' },
      },
      if: { arg: 'size', neq: 'Extra small' },
    },
    iconType: {
      name: 'Icon type',
      description: 'Native/Web Component',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
      table: {
        defaultValue: { summary: 'Web Component' },
      },
      if: { arg: 'size', neq: 'Extra small' },
    },
    disabled: {
      name: 'Disabled',
      type: 'boolean',
      description: 'Choose to disable the button',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    btnType: 'Primary',
    size: 'Large',
    text: 'Button',
    fullbleed: false,
    onlyIcon: false,
    icon: 'none',
    iconType: 'Web Component',
    disabled: false,
  },
};

const WebComponentTemplate = ({
  modeVariant,
  btnType,
  size,
  text = 'Button',
  fullbleed,
  onlyIcon,
  icon,
  iconType,
  disabled,
}) => {
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

  const modeVariantLookup = {
    Primary: 'primary',
    Secondary: 'secondary',
  };

  return formatHtmlPreview(
    `
    <style>
    /* demo-wrapper is for demonstration purposes only*/${
      icon && iconType === 'Native'
        ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    i.sdds-icon::before{
      font-size: ${size === 'Large' || size === 'Medium' ? '20' : '16'}px;
    }`
        : ''
    },
    .demo-wrapper{
      width: 100%;
    }
  </style>

  <div class="demo-wrapper">
  <sdds-button type="${btnTypeLookUp[btnType]}" size="${sizeLookUp[size]}" ${
      disabled ? 'disabled' : ''
    } ${fullbleed ? 'fullbleed' : ''}
    ${!onlyIcon ? `text="${text}"` : ''}
    text="${onlyIcon ? '' : text}" 
    ${
      modeVariant !== 'Inherit from parent'
        ? `mode-variant="${modeVariantLookup[modeVariant]}"`
        : ''
    }
    >
    ${
      onlyIcon || (icon && icon !== 'none')
        ? `
    ${
      iconType === 'Native'
        ? `<i class="sdds-btn-icon sdds-icon ${icon}" slot="icon"></i>`
        : `<sdds-icon slot="icon" class='sdds-btn-icon ' size='${
            sizeLookUp[size] === 'sm' ? '16px' : '20px'
          }' name='${icon}'></sdds-icon>`
    }
  `
        : ''
    }
</sdds-button>
  </div>
  `,
  );
};

/** Button as web component */
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {};

export const WebComponentWithIcon = WebComponentTemplate.bind({});
WebComponentWithIcon.args = {
  icon: 'truck',
  iconType: 'Web Component',
};

export const WebComponentOnlyIcon = WebComponentTemplate.bind({});
WebComponentOnlyIcon.args = {
  text: '',
  iconType: 'Web Component',
  onlyIcon: true,
  icon: 'truck',
};
