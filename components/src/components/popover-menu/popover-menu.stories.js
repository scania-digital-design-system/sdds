export default {
  title: 'Component/Popover-Menu',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    menuPosition: {
      control: {
        type: 'radio',
        options: [
          'bottom',
          'bottom-start',
          'bottom-end',
          'top',
          'top-start',
          'top-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
        ],
      },
      defaultValue: 'right-start',
      description: 'Position of the PopoverMenu',
    },
    withIcons: {
      name: 'withIcons',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

const ComponentPopoverMenu = ({ ...Basic }) => {
  const withoutIcons = `
    <sdds-popover-menu
        placement="${Basic.menuPosition}"
        selector="#trigger"> 
        <ul class="sdds-popover-menu-wrapper">
          <li>
            <a target="_blank" href="https://tegel.scania.com">Menu item 1</a>
          </li>
          <li>            
            <a target="_blank" href="https://tegel.scania.com">
              Menu item 2
            </a>
          </li>
          <li>
            <a target="_blank" href="https://tegel.scania.com">Menu item 3</a>
          </li>
          <li class="divider"></li>
          <li>
            <a target="_blank" href="https://tegel.scania.com">Menu item 4</a>
          </li>
          <li>
            <a target="_blank" href="https://tegel.scania.com">Menu item 5</a>
          </li>
        </ul>        
      </sdds-popover-menu>

      <div style="display: flex; flex-wrap: nowrap; align-items: center;">
        <span style="user-select: none;margin-right: 16px;">Click icon for popover menu</span>
        <div style="cursor: pointer; display: flex; align-items: center;" id="trigger">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.03296 3.98828C7.03296 4.54057 7.48278 4.98828 8.03767 4.98828C8.59255 4.98828 9.04238 4.54057 9.04238 3.98828C9.04238 3.436 8.59255 2.98828 8.03767 2.98828C7.48278 2.98828 7.03296 3.436 7.03296 3.98828Z" fill="#0D0F13"/>
            <path d="M7.03296 8C7.03296 8.55228 7.48278 9 8.03767 9C8.59255 9 9.04238 8.55228 9.04238 8C9.04238 7.44772 8.59255 7 8.03767 7C7.48278 7 7.03296 7.44772 7.03296 8Z" fill="#0D0F13"/>
            <path d="M7.03296 12.0146C7.03296 12.5669 7.48278 13.0146 8.03767 13.0146C8.59255 13.0146 9.04238 12.5669 9.04238 12.0146C9.04238 11.4624 8.59255 11.0146 8.03767 11.0146C7.48278 11.0146 7.03296 11.4624 7.03296 12.0146Z" fill="#0D0F13"/>
          </svg>        
        </div>
      </div>
  `;

  const withIcons = `
  <sdds-popover-menu
    placement="${Basic.menuPosition}"
    selector="#trigger"> 
    <ul class="sdds-popover-menu-wrapper">
      <li>
        <a target="_blank" href="https://tegel.scania.com">
        
            <i>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1815_6834)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44771 2.44771 2 3 2H10.7929C11.0581 2 11.3125 2.10536 11.5 2.2929L13.7071 4.5C13.8946 4.68754 14 4.94189 14 5.2071V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V3ZM10.7929 3H3V13H13V5.2071L10.7929 3Z" fill="#0D0F13"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.75V2.5H6V4.5H10V2.5H11V4.75C11 5.1642 10.6642 5.5 10.25 5.5H5.75C5.3358 5.5 5 5.1642 5 4.75Z" fill="#0D0F13"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75V13.5H10V10H6V13.5H5V9.75C5 9.3358 5.3358 9 5.75 9H10.25C10.6642 9 11 9.3358 11 9.75Z" fill="#0D0F13"/>
                </g>
                <defs>
                <clipPath id="clip0_1815_6834">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </i>

            Menu item 1            
        </a>
      </li>
      <li>            
        <a target="_blank" href="https://tegel.scania.com">

          <i>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1815_6834)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44771 2.44771 2 3 2H10.7929C11.0581 2 11.3125 2.10536 11.5 2.2929L13.7071 4.5C13.8946 4.68754 14 4.94189 14 5.2071V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V3ZM10.7929 3H3V13H13V5.2071L10.7929 3Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.75V2.5H6V4.5H10V2.5H11V4.75C11 5.1642 10.6642 5.5 10.25 5.5H5.75C5.3358 5.5 5 5.1642 5 4.75Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75V13.5H10V10H6V13.5H5V9.75C5 9.3358 5.3358 9 5.75 9H10.25C10.6642 9 11 9.3358 11 9.75Z" fill="#0D0F13"/>
              </g>
              <defs>
              <clipPath id="clip0_1815_6834">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </i>

          Menu item 2
        </a>
      </li>
      <li>            
        <a target="_blank" href="https://tegel.scania.com">

          <i>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1815_6834)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44771 2.44771 2 3 2H10.7929C11.0581 2 11.3125 2.10536 11.5 2.2929L13.7071 4.5C13.8946 4.68754 14 4.94189 14 5.2071V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V3ZM10.7929 3H3V13H13V5.2071L10.7929 3Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.75V2.5H6V4.5H10V2.5H11V4.75C11 5.1642 10.6642 5.5 10.25 5.5H5.75C5.3358 5.5 5 5.1642 5 4.75Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75V13.5H10V10H6V13.5H5V9.75C5 9.3358 5.3358 9 5.75 9H10.25C10.6642 9 11 9.3358 11 9.75Z" fill="#0D0F13"/>
              </g>
              <defs>
              <clipPath id="clip0_1815_6834">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </i>

          Menu item 3
        </a>
      </li>
      <li class="divider"></li>
      <li>            
        <a target="_blank" href="https://tegel.scania.com">

          <i>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1815_6834)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44771 2.44771 2 3 2H10.7929C11.0581 2 11.3125 2.10536 11.5 2.2929L13.7071 4.5C13.8946 4.68754 14 4.94189 14 5.2071V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V3ZM10.7929 3H3V13H13V5.2071L10.7929 3Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.75V2.5H6V4.5H10V2.5H11V4.75C11 5.1642 10.6642 5.5 10.25 5.5H5.75C5.3358 5.5 5 5.1642 5 4.75Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75V13.5H10V10H6V13.5H5V9.75C5 9.3358 5.3358 9 5.75 9H10.25C10.6642 9 11 9.3358 11 9.75Z" fill="#0D0F13"/>
              </g>
              <defs>
              <clipPath id="clip0_1815_6834">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </i>

          Menu item 4
        </a>
      </li>
      <li>            
        <a target="_blank" href="https://tegel.scania.com">

          <i>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1815_6834)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44771 2.44771 2 3 2H10.7929C11.0581 2 11.3125 2.10536 11.5 2.2929L13.7071 4.5C13.8946 4.68754 14 4.94189 14 5.2071V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V3ZM10.7929 3H3V13H13V5.2071L10.7929 3Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.75V2.5H6V4.5H10V2.5H11V4.75C11 5.1642 10.6642 5.5 10.25 5.5H5.75C5.3358 5.5 5 5.1642 5 4.75Z" fill="#0D0F13"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75V13.5H10V10H6V13.5H5V9.75C5 9.3358 5.3358 9 5.75 9H10.25C10.6642 9 11 9.3358 11 9.75Z" fill="#0D0F13"/>
              </g>
              <defs>
              <clipPath id="clip0_1815_6834">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </i>

          Menu item 5
        </a>
      </li>
    </ul>        
  </sdds-popover-menu>

  <div style="display: flex; flex-wrap: nowrap; align-items: center;">
    <span style="user-select: none;margin-right: 16px;">Click icon for popover menu</span>
    <div style="cursor: pointer; display: flex; align-items: center;" id="trigger">
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.03296 3.98828C7.03296 4.54057 7.48278 4.98828 8.03767 4.98828C8.59255 4.98828 9.04238 4.54057 9.04238 3.98828C9.04238 3.436 8.59255 2.98828 8.03767 2.98828C7.48278 2.98828 7.03296 3.436 7.03296 3.98828Z" fill="#0D0F13"/>
        <path d="M7.03296 8C7.03296 8.55228 7.48278 9 8.03767 9C8.59255 9 9.04238 8.55228 9.04238 8C9.04238 7.44772 8.59255 7 8.03767 7C7.48278 7 7.03296 7.44772 7.03296 8Z" fill="#0D0F13"/>
        <path d="M7.03296 12.0146C7.03296 12.5669 7.48278 13.0146 8.03767 13.0146C8.59255 13.0146 9.04238 12.5669 9.04238 12.0146C9.04238 11.4624 8.59255 11.0146 8.03767 11.0146C7.48278 11.0146 7.03296 11.4624 7.03296 12.0146Z" fill="#0D0F13"/>
      </svg>        
    </div>
  </div>
  `;

  if (Basic.withIcons) {
    return withIcons;
  }
  return withoutIcons;
};

export const Basic = ComponentPopoverMenu.bind({});
Basic.args = { withIcons: false };

export const WithIcons = ComponentPopoverMenu.bind({});
WithIcons.args = { withIcons: true };
