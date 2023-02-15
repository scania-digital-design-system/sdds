import { formatHtmlPreview } from '../../utils/utils';
import { iconsNames } from '../icon/iconsArray';
import readme from './readme.md';

export default {
  title: 'Components/Chip',
  parameters: {
    notes: readme,
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
      description:
        'Sets the type of input for the chip. To not have it as an input element, choose `none`',
      control: {
        type: 'radio',
      },
      options: ['Checkbox', 'Radio', 'Button', 'None'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
  args: {
    type: 'None',
    text: 'Chip text',
    icon: 'none',
    iconPosition: 'Left',
    active: false,
    size: 'Large',
  },
};

const Template = ({ type, icon, iconPosition, active, text, size }) => {
  const getTypeTemplate = (typeValue: string) => {
    switch (typeValue.toLowerCase()) {
      case 'radio':
        return `<sdds-chip
            size="${size === 'Large' ? 'lg' : 'sm'}"
            ${active ? 'active' : ''}
            icon="${icon}"
            icon-position="${iconPosition.toLowerCase()}"
            type="radio"
            chip-id="chip-radio-1"
            name="radio-group"
            value="radio-1"
            active
            >
            ${text} 1
          </sdds-chip>
          <sdds-chip
            size="${size === 'Large' ? 'lg' : 'sm'}"
            ${active ? 'active' : ''}
            icon="${icon}"
            icon-position="${iconPosition.toLowerCase()}"
            type="radio"
            chip-id="chip-radio-2"
            name="radio-group"
            value="radio-2"
            >
            ${text} 2
          </sdds-chip>`;
      case 'button':
        return `
            <sdds-chip
              size="${size === 'Large' ? 'lg' : 'sm'}"
              ${active ? 'active' : ''}
              icon="${icon}"
              icon-position="${iconPosition.toLowerCase()}"
              type="button"
              >
              ${text}
            </sdds-chip>`;
      case 'checkbox':
        return `
            <sdds-chip
              size="${size === 'Large' ? 'lg' : 'sm'}"
              ${active ? 'active' : ''}
              icon="${icon}"
              icon-position="${iconPosition.toLowerCase()}"
              type="checkbox"
              >
              ${text} 1
            </sdds-chip>
            <sdds-chip
              size="${size === 'Large' ? 'lg' : 'sm'}"
              ${active ? 'active' : ''}
              icon="${icon}"
              icon-position="${iconPosition.toLowerCase()}"
              type="checkbox"
              >
              ${text} 2
            </sdds-chip>
            `;
      default:
        return `
          <sdds-chip
            size="${size === 'Large' ? 'lg' : 'sm'}"
            ${active ? 'active' : ''}
            icon="${icon}"
            icon-position="${iconPosition.toLowerCase()}"
            type="none"
            active
            >
            ${text}
          </sdds-chip>`;
    }
  };

  return formatHtmlPreview(`
        <style>
        /* Note: Demo classes used here are just for demo purposes in Storybook */
          .demo-wrapper {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
        </style>
        <div class="demo-wrapper">
          ${getTypeTemplate(type)}
        </div>


        ${
          type !== 'None'
            ? `
        <!-- Script tag with eventlistener for demo purposes. -->
        <script>
        chips = document.querySelectorAll('sdds-chip');

        chips.forEach((element) => {
          element.removeEventListener('sddsChange', null)
          element.removeEventListener('sddsClick', null)
          element.addEventListener('${
            type === 'Radio' || type === 'Checkbox' ? 'sddsChange' : 'sddsClick'
          }', (event) => {
            console.log('${
              type === 'Checkbox'
                ? `Chip with id: ', event.detail.chipId, ' is ', event.detail.active`
                : ``
            } ${type === 'Radio' ? `Chip with id: ', event.detail.chipId, 'was selected'` : ``} ${
                type === 'Button' ? `Chip with id: ', event.detail.chipId, 'was clicked'` : ``
              })
          })
        })  
        </script>
          `
            : ''
        }
    `);
};

export const WebComponent = Template.bind({});
