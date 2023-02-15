import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';

export default {
  title: 'Components/Chip',
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
    text: {
      name: 'Chip text',
      description: 'Set custom chip text',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Add an icon to the chip. Choose `none` to exclude the icon',
      control: {
        type: 'select',
      },
      options: ['none', ...iconsNames],
    },
    iconPosition: {
      name: 'Icon position',
      description: 'Set the placement of the icon',
      control: {
        type: 'radio',
      },
      options: ['Left', 'Right'],
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    active: {
      name: 'Active',
      description: 'Set the chips state as active.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'Size',
      description: 'Set the chip size',
      control: {
        type: 'radio',
      },
      options: ['Small', 'Large'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    type: {
      name: 'Type',
      control: {
        type: 'radio',
      },
      options: ['checkbox', 'radio', 'button', 'none'],
    },
  },
  args: {
    type: 'checkbox',
    text: 'Chip text',
    icon: 'none',
    iconPosition: 'Right',
    active: false,
    size: 'Large',
  },
};

const Template = ({ type, icon, iconPosition, active, text, size }) =>
  formatHtmlPreview(`
        <sdds-chip
          size="${size === 'Large' ? 'lg' : 'sm'}"
          ${active ? 'active' : ''}
          icon="${icon}"
          icon-position="${iconPosition.toLowerCase()}"
          type="${type}"
          >
          ${text}
        </sdds-chip>
    `);

export const WebComponent = Template.bind({});
