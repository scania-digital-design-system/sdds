import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Popover-Menu',
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    menuPosition: {
      name: 'Menu position',
      description: 'Position of the PopoverMenu',
      control: {
        type: 'radio',
      },
      options: ['Bottom', 'Bottom start', 'Bottom end', 'Top', 'Top start', 'Top end', 'Left', 'Left-start', 'Left end', 'Right', 'Right start', 'Right end'],
      defaultValue: 'right-start',
    },
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
      .demo-wrapper {
        display: flex;
        flex-wrap: nowrap;
        alignt-items: center;
      }
    </style>
    <sdds-popover-menu
        placement="${menuPosLookup[menuPosition]}"
        selector="#trigger"> 
        <ul class="sdds-popover-menu-wrapper">
          <li>
            <a target="_blank" href="https://digitaldesign.scania.com">Menu item 1</a>
          </li>
          <li>            
            <a target="_blank" href="https://digitaldesign.scania.com">
              Menu item 2
            </a>
          </li>
          <li>
            <a target="_blank" href="https://digitaldesign.scania.com">Menu item 3</a>
          </li>
          <li class="divider"></li>
          <li>
            <a target="_blank" href="https://digitaldesign.scania.com">Menu item 4</a>
          </li>
          <li>
            <a target="_blank" href="https://digitaldesign.scania.com">Menu item 5</a>
          </li>
        </ul>        
      </sdds-popover-menu>

      <div class="demo-wrapper">
        <span style="user-select: none;margin-right: 16px;">Click icon for popover menu</span>
        <div style="cursor: pointer; display: flex; align-items: center;" id="trigger">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.03296 3.98828C7.03296 4.54057 7.48278 4.98828 8.03767 4.98828C8.59255 4.98828 9.04238 4.54057 9.04238 3.98828C9.04238 3.436 8.59255 2.98828 8.03767 2.98828C7.48278 2.98828 7.03296 3.436 7.03296 3.98828Z" fill="#0D0F13"/>
            <path d="M7.03296 8C7.03296 8.55228 7.48278 9 8.03767 9C8.59255 9 9.04238 8.55228 9.04238 8C9.04238 7.44772 8.59255 7 8.03767 7C7.48278 7 7.03296 7.44772 7.03296 8Z" fill="#0D0F13"/>
            <path d="M7.03296 12.0146C7.03296 12.5669 7.48278 13.0146 8.03767 13.0146C8.59255 13.0146 9.04238 12.5669 9.04238 12.0146C9.04238 11.4624 8.59255 11.0146 8.03767 11.0146C7.48278 11.0146 7.03296 11.4624 7.03296 12.0146Z" fill="#0D0F13"/>
          </svg>        
        </div>
      </div>
  `,
  );
};

export const Default = Template.bind({});
Default.args = {
  menuPosition: 'Bottom',
};