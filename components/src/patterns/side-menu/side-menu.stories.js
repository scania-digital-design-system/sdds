import { useArgs } from '@storybook/client-api';

export default {
  title: 'Patterns/SideMenu',
};

const Template = (args) => {
  const {
    icon = false,
    dropdown = false,
    collapse = false,
    active = false,
  } = args;
  const icons = icon
    ? '<span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>'
    : '';

  const [_, setArgs] = useArgs();

  window.toggleCollapse = (event) => {
    event.preventDefault();
    setArgs({ ...args, collapse: !collapse });
  };

  const style = `
  <style>
    html, body, #root, #storybook-addon-themes {
      height: 100%;
      padding:0;
    }
    .sb-show-main.sb-main-padded {
      padding: 0;
    }
    .sdds-demo-container {
      padding-top: var(--sdds-header-height);
      align-items: stretch;
      height: 100%;
      overflow:hidden;
    }
    .sdds-container {
      overflow-y:auto;
    }
    
    .sdds-sidebar.expanded {
      display: block;
      position: fixed;
      height:100%;
    }
    .sdds-navbar-menu-popover {
      display:none;
    }
    .popover-menu-parent:hover{
    cursor: default;
    background: transparent !important;
    }
    .popover-menu-title{
    padding: 16px 10px 16px 24px;
    flex-grow: 1;
    font-weight: bold;
    }
    
    @media all and (min-width: 992px) {
      .sdds-sidebar.expanded {
        position: relative;
      }
      .sdds-navbar-menu-popover {
        display:block;
      }
    }
    
  </style>
  `;

  return `
  <sdds-theme></sdds-theme>
  ${style}
  <div class="sdds-navbar-overlay expanded"></div>

  <nav class="sdds-navbar">
    <button id="menu-mobile" class="sdds-navbar-icon-button sdds-navbar-side-menu-drawer expanded">
      <span class="sdds-icon-drawer"></span>
    </button>
    <div class="sdds-navbar-application-brand">Application</div>

    <div class="sdds-navbar-scania-brand"></div>
  </nav>

  <div class="sdds-push sdds-demo-container">
    <div class="sdds-sidebar expanded ${
      collapse ? ' sdds-sidebar-collapse' : ''
    }">

      <div class="sdds-navbar-side-menu expanded">
        <ul class="sdds-navbar-menu-list sdds-navbar-menu-list--extended">
          <li class="sdds-navbar-menu-item ${active ? 'active' : ''}">
              ${icons}
              <a class="sdds-navbar-menu-item-link" href="#"> 
              Item 1 
              </a>
          </li>
          <li class="sdds-navbar-menu-item">
              ${icons}
              <a class="sdds-navbar-menu-item-link" href="#"> 
              Item 2 
              </a>
          </li>
          <li class=" ${
            dropdown
              ? 'sdds-navbar-menu-item-dropdown'
              : 'sdds-navbar-menu-item'
          } ${collapse ? '' : ' opened'}">
              <div class="sdds-navbar-menu-item-dropdown-parent">
                ${icons}
                <a class="sdds-navbar-menu-item-link" href="#"> 
                  ${
                    dropdown
                      ? '<span class="sdds-menu-item-dropdown-text">Item 3</span><span class="sdds-icon-arrow"></span>'
                      : 'Item 3 '
                  }
                </a>
              </div>

              
              ${
                dropdown
                  ? `<ul class="sdds-navbar-menu__dropdown-menu">
                  <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-1 long label...</a></li>
                  <li class="sdds-navbar-menu__dropdown-item ${
                    active ? 'active' : ''
                  }"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-2</a></li>
                  <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-3</a></li>
                  <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-4 long label...</a></li>
                </ul>`
                  : ''
              }
          </li>
          <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 4 
              </a>
          </li>
           <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 5 
              </a>
          </li>
           <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 6 
              </a>
          </li>
           <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 7 
              </a>
          </li>
            <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 8 
              </a>
          </li>
            <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Item 9 
              </a>
          </li>
           <li class="sdds-navbar-menu-item">        
          ${icons}     
              <a class="sdds-navbar-menu-item-link" href="#"> 
                Last Item 
              </a>
          </li>
        </ul>
        ${
          icon && !collapse
            ? `<button onclick="toggleCollapse(event)" class="sdds-collapse-button sdds-navbar-menu-item sdds-navbar-menu-item-bottom hide-collapse-button">
               <span class="collapse-button-icon">
                <sdds-icon style="font-size: 30px;" name="scania-arrow"></sdds-icon>               
               </span>
              <div class="collapse-button-text">
              Collapse
               </div>
             </button>
             `
            : icon
            ? `<button onclick="toggleCollapse(event)" class="sdds-collapse-button collapse-button-collapse sdds-navbar-menu-item sdds-navbar-menu-item-bottom sdds-navbar-menu-hide-on-mobil hide-collapse-button">
               <span class="collapse-button-icon">
               <sdds-icon style="font-size: 30px; transform:rotate(180deg)" name="scania-arrow"></sdds-icon>               
              </span>
          </button>
              `
            : ''
        }
        
      </div>
      
      ${
        collapse && !dropdown
          ? `
      <div class="sdds-navbar-menu-popover" style="position:absolute;left:17rem;top:0;">
        <div class="sdds-navbar-menu-item popover-menu-parent"> 
          <div class="popover-menu-title"> 
          Item 1 
          </div>
        </div>
      </div>`
          : ''
      }
      
      ${
        collapse && dropdown
          ? `
      <div class="sdds-navbar-menu-popover" style="position:absolute;left:17rem;top:34rem;">
        <div class="sdds-navbar-menu-item-dropdown opened"">
          <div class="sdds-navbar-menu-item-dropdown-parent popover-menu-parent">
            <div class="popover-menu-title active"> 
              <span class="sdds-menu-item-dropdown-text">Item 3</span>
            </div>
          </div>  
          <ul class="sdds-navbar-menu__dropdown-menu">
              <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-1 long label...</a></li>
              <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-2</a></li>
              <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-3</a></li>
              <li class="sdds-navbar-menu__dropdown-item"><a class="sdds-navbar-menu__dropdown-item-link" href="#">Sub item 3-4 long label...</a></li>
          </ul>
        </div>
      </div>
      `
          : ''
      }

    </div>
    
    <div class="sdds-container">
      <div class="sdds-row">
        <div class="sdds-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

        <div class="sdds-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  </div>
  `;
};

export const Basic = Template.bind({});

Basic.args = {
  active: true,
};

Basic.argTypes = {
  collapse: {
    table: {
      disable: true,
    },
  },
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: true,
  active: true,
};

export const Dropdown = Template.bind({});

Dropdown.args = {
  dropdown: true,
  icon: true,
};
