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
      description: 'Set custom chip text',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Add an icon to the chip.',
      control: {
        type: 'boolean',
      },
    },
    iconType: {
      name: 'Icon type',
      description: 'Choose what icon type to use',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Webcomponent'],
      if: { arg: 'icon', eq: true },
    },
    iconPosition: {
      name: 'Icon position',
      description: 'Set the placement of the icon',
      control: {
        type: 'radio',
      },
      options: ['Icon left', 'Icon right'],
      if: { arg: 'icon', eq: true },
    },
    state: {
      name: 'State',
      description: 'Set the chips state as active or default',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Active'],
    },
    size: {
      name: 'Size',
      description: 'Set the chip size',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Small'],
    },
  },
  args: {
    placeholderText: 'Chip text',
    icon: false,
    iconType: 'Native',
    iconPosition: 'Icon right',
    state: 'Default',
    size: 'Default',
  },
};

const Template = ({ icon, iconPosition, iconType, state, placeholderText, size }) => {
  const stateValue = state === 'Active' ? 'sdds-chip__active' : '';
  const sizeValue = size === 'Small' ? 'sdds-chip-sm' : '';
  const iconPositionLookup = {
    'Icon left': 'sdds-chip__icon-left',
    'Icon right': 'sdds-chip__icon-right',
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
    @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');
    .sdds-chip-icon {
      font-size: 16px;
    }
          </style>`
      : ''
  }
    <div class="sdds-chip ${
      icon ? iconPositionLookup[iconPosition] : ''
    } ${stateValue} ${sizeValue}">
      ${icon ? iconSvg : ''}<span class="sdds-chip-text">${placeholderText}</span>
    </div>
    `);
};

export const Default = Template.bind({});
Default.args = {};

export const IconRight = Template.bind({});
IconRight.args = {
  icon: true,
  iconPosition: 'Icon right',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  icon: true,
  iconPosition: 'Icon left',
};

export const Active = Template.bind({});
Active.args = {
  state: 'Active',
};

export const Small = Template.bind({});
Small.args = {
  size: 'Small',
};
