import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Chips',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      description: 'Chip text',
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
      description: 'Native/Webcomponent',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Webcomponent'],
      if: { arg: 'icon', eq: true },
    },
    iconPosition: {
      name: 'Icon position',
      description: 'Icon placement',
      control: {
        type: 'radio',
      },
      options: ['Icon left', 'Icon right'],
      if: { arg: 'icon', eq: true },
    },
    state: {
      name: 'State',
      description: 'Chip state',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Active'],
    },
    size: {
      name: 'Size',
      description: 'Chip size',
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
  let stateValue = state === 'Active' ? 'sdds-chip__active' : '';
  let sizeValue = size === 'Small' ? 'sdds-chip__small' : '';
  const iconPositionLookup = {
    'Icon left': 'sdds-chip__icon-left',
    'Icon right': 'sdds-chip__icon-right',
  };

  // TODO - Add dark theme to story
  const iconSvg = `
    ${iconType === 'Native' ? '<i class="sdds-chip-icon sdds-icon notification"></i>' : '<div><sdds-icon class="sdds-chip-icon" name="notification" size="16px" /></div>'}
    `;

  return formatHtmlPreview(`
    <style>
      ${iconType === 'Native' ? `@import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');` : ''}
      .sdds-chip-icon {
        font-size: 16px;
      }
    </style>
    <div class="sdds-chip ${icon ? iconPositionLookup[iconPosition] : ''} ${stateValue} ${sizeValue}">
      ${icon ? iconSvg : ''}
      <span class="sdds-chip-text">${placeholderText}</span>
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
