export default {
  title: 'Patterns/SideMenu',
  args: {
    active: true,
  },
};

const Template = ({
  icon = false,
  dropdown = false,
  collapse = false,
  active = false,
}) => {
  const icons = icon
    ? '<span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>'
    : '';

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
        <ul class="sdds-navbar-menu-list">
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
                  <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-1 long label...</a></li>
                  <li class="sdds-navbar-menu__dropdown-item ${
                    active ? 'active' : ''
                  }"><a href="#">Sub item 3-2</a></li>
                  <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-3</a></li>
                  <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-4 long label...</a></li>
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
        </ul>
      </div>
      
      ${
        collapse && !dropdown
          ? `
      <div class="sdds-navbar-menu-popover" style="position:absolute;left:17rem;top:0;">
        <div class="sdds-navbar-menu-item"> 
          <a class="sdds-navbar-menu-item-link" href="#"> 
          Item 1 
          </a>
        </div>
      </div>`
          : ''
      }
      
      ${
        collapse && dropdown
          ? `
      <div class="sdds-navbar-menu-popover" style="position:absolute;left:17rem;top:34rem;">
        <div class="sdds-navbar-menu-item-dropdown opened"">
          <div class="sdds-navbar-menu-item-dropdown-parent">
            <a class="sdds-navbar-menu-item-link active" href="#"> 
              <span class="sdds-menu-item-dropdown-text">Item 3</span>
            </a>
          </div>  
          <ul class="sdds-navbar-menu__dropdown-menu">
              <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-1 long label...</a></li>
              <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3-2</a></li>
              <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-3</a></li>
              <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-4 long label...</a></li>
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
  icon: false,
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
  dropdown: false,
};

export const Dropdown = Template.bind({});

Dropdown.args = {
  dropdown: true,

  active: true,
};

export const Collapse = Template.bind({});

Collapse.args = {
  icon: true,
  collapse: true,
  active: true,
};

Collapse.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
};

export const CollapseDropdown = Template.bind({});

CollapseDropdown.args = {
  icon: true,
  dropdown: true,
  collapse: true,
  active: true,
};

CollapseDropdown.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
  dropdown: {
    table: {
      disable: true,
    },
  },
};
