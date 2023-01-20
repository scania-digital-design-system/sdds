import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Chips',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11268%3A39456&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11268%3A39456&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Sets custom chip text.',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Adds an icon to the chip.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    iconType: {
      name: 'Icon type',
      description: 'Choose what icon type to use.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
      if: { arg: 'icon', eq: true },
      table: {
        defaultValue: { summary: 'Native' },
      },
    },
    iconPosition: {
      name: 'Icon position',
      description: 'Sets the placement of the icon.',
      control: {
        type: 'radio',
      },
      options: ['Icon left', 'Icon right'],
      if: { arg: 'icon', eq: true },
      table: {
        defaultValue: { summary: 'Icon right' },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the chip size.',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Small'],
      table: {
        defaultValue: { summary: 'Default' },
      },
    },
    state: {
      name: 'State',
      description: 'Sets the chips state as active or default.',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Active'],
      table: {
        defaultValue: { summary: 'Default' },
      },
    },
  },
  args: {
    placeholderText: 'Chip text',
    icon: false,
    iconType: 'Native',
    iconPosition: 'Icon right',
    size: 'Default',
    state: 'Default',
  },
};

const Template = ({ icon, iconPosition, iconType, state, placeholderText, size }) => {
  const stateValue = state === 'Active' ? 'sdds-chip-active' : '';
  const sizeValue = size === 'Small' ? 'sdds-chip-sm' : '';
  const iconPositionLookup = {
    'Icon left': 'sdds-chip-icon-left',
    'Icon right': 'sdds-chip-icon-right',
  };

  // TODO - Add dark theme to story
  const iconSvg = `
    ${
      iconType === 'Native'
        ? '<i class="sdds-chip-icon sdds-icon notification"></i>'
        : '<sdds-icon class="sdds-chip-icon" name="notification" size="16px"></sdds-icon>'
    }
    `;

  return formatHtmlPreview(`
  ${
    iconType === 'Native'
      ? `<style>
/* Note: In case you are using WebFont icons, please make sure to import icons css file in your implementation */
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');

          </style>`
      : ''
  }
    <!-- Below is a chip button implementation. Please use the proper html element 
    depending on usage (button, checkbox, radio, etc) -->
    <button class="sdds-chip ${
      icon ? iconPositionLookup[iconPosition] : ''
    } ${stateValue} ${sizeValue}">
      ${icon ? iconSvg : ''}<span class="sdds-chip-text">${placeholderText}</span>
    </button>
    `);
};

export const Native = Template.bind({});
