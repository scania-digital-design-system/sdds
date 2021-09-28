import readme from './readme.md';

export default {
  title: 'Patterns/Header',
  argTypes: {
    siteName: {
      type: 'string',
      defaultValue: 'Application',
    },
  },
  parameters: {
    notes: readme,
  },
};

const Template = ({
  siteName,
  openMenuMobile = false,
  navMenu = '',
  toolbarMenuMobile = '',
  toolbarMenu = '',
}) => {
  const overlayExpanded =
    openMenuMobile || toolbarMenu.trim('').length > 0 ? 'expanded' : '';
  const expanded = openMenuMobile ? 'expanded' : '';

  return `
  <sdds-theme></sdds-theme>
  
  <nav class="sdds-navbar">
    <div class="sdds-navbar-overlay ${overlayExpanded}"></div>

    <button id="menu-mobile" class="sdds-navbar-icon-button sdds-navbar-side-menu-drawer ${expanded}">
      <span class="sdds-icon-drawer"></span>
    </button>
    <div class="sdds-navbar-application-brand">${siteName}</div>
     
    <div id="side-menu" class="sdds-navbar-collapsible ${expanded}">
      
      ${navMenu}

      ${toolbarMenuMobile}
      
    </div>        
    ${toolbarMenu}    

    <div class="sdds-navbar-scania-brand"></div>
  </nav>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  siteName: 'My Application',
  openMenuMobile: false,
};

const navMenuHTML = `
<ul class="sdds-navbar-menu-list">
  <li class="sdds-navbar-menu-item active">
    <a class="sdds-navbar-menu-item-link" href="#"> 
      <span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>
      Item 1 
    </a>
  </li>
  <li class="sdds-navbar-menu-item">
    <a class="sdds-navbar-menu-item-link" href="#"> Item 2 </a>
  </li>
  <li class="sdds-navbar-menu-item-dropdown opened">
    <a class="sdds-navbar-menu-item-link" href="#"> 
      Item 3 
      <span class="sdds-icon-arrow"></span>
    </a>
    <ul class="sdds-navbar-menu__dropdown-menu">
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3 long label...</a></li>
      <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3 long label...</a></li>
    </ul>
  </li>
  <li class="sdds-navbar-menu-item">
    <a class="sdds-navbar-menu-item-link" href="#"> Item 4 </a>
  </li>
</ul>
`;

const toolbarMenuMobileHTML = `
<div class="sdds-navbar-menu-toolbar-mobile">
  <ul class="sdds-navbar-menu-list">
    <li class="sdds-navbar-menu-item">
      <a class="sdds-navbar-menu-item-link" href="#">Toolbar link</a>
    </li>
    <li class="sdds-navbar-menu-item-dropdown">
      <a class="sdds-navbar-menu-item-link" href="#">EN <span class="sdds-icon-arrow"></span></a>
      <ul class="sdds-navbar-menu__dropdown-menu">
      <li class="sdds-navbar-menu__dropdown-item sdds-navbar-menu-item-description">Select language</li>
        <li class="sdds-navbar-menu__dropdown-item active"><a href="#">English</a></li>
        <li class="sdds-navbar-menu__dropdown-item"><a href="#">Finnish</a></li>
        <li class="sdds-navbar-menu__dropdown-item"><a href="#">France</a></li>
        <li class="sdds-navbar-menu__dropdown-item"><a href="#">Swedish</a></li>
      </ul>
    </li>
  </ul>
</div>
`;

const toolbarMenuHTML = `
<div class="sdds-navbar-menu-toolbar">
  <div class="sdds-navbar-menu-item-dropdown opened">
    <a class="sdds-navbar-menu-item-link" href="#"><span class="sdds-icon-applauncher"></span></a>
    <ul class="sdds-navbar-menu__dropdown-menu">
      <li class="sdds-navbar-menu__dropdown-item sdds-navbar-menu-item-description">Category name</li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 1</a></li>
      <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Application name 2</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
      <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
    </ul>
  </div>
</div>
`;

export const NavMenu = Template.bind({});
NavMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  navMenu: navMenuHTML,
};

export const toolbarMenu = Template.bind({});
toolbarMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  toolbarMenuMobile: toolbarMenuMobileHTML,
  toolbarMenu: toolbarMenuHTML,
};

export const AllMenu = Template.bind({});
AllMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  navMenu: navMenuHTML,
  toolbarMenuMobile: toolbarMenuMobileHTML,
  toolbarMenu: toolbarMenuHTML,
};
