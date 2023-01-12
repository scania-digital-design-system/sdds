import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Popover Menu',
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=16794%3A59241&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=16794%3A59241&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    menuPosition: {
      name: 'Menu position',
      description: 'Position of the Popover menu',
      control: {
        type: 'select',
      },
      options: [
        'Bottom',
        'Bottom start',
        'Bottom end',
        'Top',
        'Top start',
        'Top end',
        'Left',
        'Left-start',
        'Left end',
        'Right',
        'Right start',
        'Right end',
      ],
    },
  },
  args: {
    menuPosition: 'Bottom start',
  },
};

const Template = ({ menuPosition }) => {
  const menuPosLookup = {
    'Bottom': 'bottom',
    'Bottom start': 'bottom-start',
    'Bottom end': 'bottom-end',
    'Top': 'top',
    'Top start': 'top-start',
    'Top end': 'top-end',
    'Left': 'left',
    'Left star': 'left-start',
    'Left end': 'left-end',
    'Right': 'right',
    'Right start': 'right-start',
    'Right end': 'right-end',
  };

  return formatHtmlPreview(
    `
    <style>
      /* demo-wrapper styles is for demonstration purposes only */
      .demo-wrapper {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
      }
    </style>

    <sdds-popover-menu
      placement="${menuPosLookup[menuPosition]}"
      selector="#trigger">
      <ul class="sdds-popover-menu-wrapper">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">Menu item 1</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
            Menu item 2
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">Menu item 3</a>
        </li>
        <li class="divider"></li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">Menu item 4</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">Menu item 5</a>
        </li>
      </ul>
    </sdds-popover-menu>

    <!-- demo-wrapper code below is for demonstration purposes only -->
    <div class="demo-wrapper">
      <span class="sdds-u-mr2">Click icon for popover menu</span>
      
      <sdds-button aria-label="menu" onlyIcon id="trigger" type="ghost" size="sm">
        <sdds-icon slot="icon" class="sdds-btn-icon" size="16px" name="kebab"></sdds-icon>
      </sdds-button>
    </div>
    `,
  );
};

export const Default = Template.bind({});
Default.args = {};