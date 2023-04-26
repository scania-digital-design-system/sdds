import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Chips',
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
    active: {
      name: 'Active',
      description: 'Toggles if the chip is active or not.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the chip size.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Small'],
      table: {
        defaultValue: { summary: 'Large' },
      },
    },
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
    iconType: {
      name: 'Icon type',
      description: 'Switch between showing a native or a web component icon.',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
      if: { arg: 'icon', eq: true },
      table: {
        defaultValue: { summary: 'Native' },
      },
    },
  },
  args: {
    active: false,
    size: 'Large',
    placeholderText: 'Chip text',
    icon: false,
    iconPosition: 'Icon right',
    iconType: 'Native',
  },
};

const Template = ({ active, size, placeholderText, icon, iconPosition, iconType }) => {
  const activeValue = active === true ? 'sdds-chip-active' : '';
  const sizeValue = size === 'Small' ? 'sdds-chip-sm' : '';
  const iconPositionLookup = {
    'Icon left': 'sdds-chip-icon-left',
    'Icon right': 'sdds-chip-icon-right',
  };

  // TODO - Add dark theme to story
  const iconSvg = `
    ${
      iconType === 'Native'
        ? '<i class=" sdds-icon notification"></i>'
        : '<sdds-icon name="notification" size="16px"></sdds-icon>'
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
    } ${activeValue} ${sizeValue}">
      ${
        icon
          ? `
      <div class="sdds-chip-icon">
        ${iconSvg}
      </div>
      `
          : ''
      }<span class="sdds-chip-text">${placeholderText}</span>
    </button>
    `);
};

export const Native = Template.bind({});
