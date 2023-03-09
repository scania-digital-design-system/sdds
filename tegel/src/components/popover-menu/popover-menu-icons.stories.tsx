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
      description: 'Sets the position of the popover menu.',
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
        'Auto',
      ],
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    menuPosition: 'Auto',
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
    'Auto': 'auto',
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
      id="my-popover-menu">
      <ul class="sdds-popover-menu-wrapper">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
            <i>
              <sdds-icon name="save" size="16px"></sdds-icon>
            </i>
            Menu item 1
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
            <i>
              <sdds-icon name="save" size="16px"></sdds-icon>
            </i>
            Menu item 2
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
            <i>
              <sdds-icon name="save" size="16px"></sdds-icon>
            </i>
            Menu item 4
          </a>
        </li>
      </ul>
    </sdds-popover-menu>

    <!-- demo-wrapper code below is for demonstration purposes only -->
    <div class="demo-wrapper">
      <span class="sdds-u-mr2">Click icon for popover menu</span>
      
      <sdds-button aria-label="menu" onlyIcon id="my-popover-button" type="ghost" size="sm">
        <sdds-icon slot="icon" class="sdds-btn-icon" size="16px" name="kebab"></sdds-icon>
      </sdds-button>
    </div>

    <script>
      // The 'selector' prop on Popover-Menu can be used instead, but it might be less ideal in frameworks like React 
      document.getElementById('my-popover-menu').referenceEl = document.getElementById('my-popover-button');
    </script>
    `,
  );
};

export const WithIcons = Template.bind({});