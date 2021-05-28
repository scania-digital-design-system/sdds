import readme from './readme.md';

export default {
  title: 'Patterns/Header',
  argTypes: {
    siteName: { 
      type: 'string',
      defaultValue: 'Application'
    },
  },
  parameters: {
    notes: readme,
  },
};

function openMenu() {
  const overlay = document.querySelector('.sdds-navbar-overlay');
  const collapsible = document.getElementById('side-menu');
  this.classList.toggle('open');
  overlay.classList.toggle('expanded');
  collapsible.classList.toggle('expanded');
}

const Template = ({siteName}) => {
  return `
  <sdds-theme></sdds-theme>
  
  <nav class="sdds-navbar">
    <div class="sdds-navbar-overlay"></div>

    <button id="menu-mobile" class="sdds-navbar-icon-button sdds-navbar-side-menu-toggler" onclick="openMenu()">
      <span class="sdds-icon-toggler"></span>
    </button>
    <div class="sdds-navbar-application-brand">${siteName}</div>
     
    <div id="side-menu" class="sdds-navbar-collapsible">
      <ul class="sdds-navbar-menu-list">
        <li class="sdds-navbar-menu-item active">
          <a class="sdds-navbar-menu-item-link" href="#"> 
            <span class="sdds-navbar-icon-button"><svg width="16" height="17" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="16" height="16"/> </svg></span>
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

      <div class="sdds-navbar-menu-global-mobile">

        <ul class="sdds-navbar-menu-list">
          <li class="sdds-navbar-menu-item">
            <a class="sdds-navbar-menu-item-link" href="#">Toolbar link</a>
          </li>
          <li class="sdds-navbar-menu-item-dropdown opened">
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
    </div>        

    <div class="sdds-navbar-menu-global">
      <div class="sdds-navbar-menu-item-dropdown">
        <a class="sdds-navbar-menu-item-link" href="#"><span class="sdds-icon-applauncher"></span></a>
        <ul class="sdds-navbar-menu__dropdown-menu">
          <li class="sdds-navbar-menu__dropdown-item sdds-navbar-menu-item-description">Category name</li>
          <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 1</a></li>
          <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Application name 2</a></li>
          <li class="sdds-navbar-menu__dropdown-item"><a href="#">Application name 3</a></li>
        </ul>
      </div>
    </div>

    <div class="sdds-navbar-scania-brand"></div>
  </nav>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  siteName: 'My Application',
  shortName: 'My App',
  siteUrl: 'http://digitaldesign.scania.com'
}


const HeaderComp = () => {
  return `
  <sdds-theme></sdds-theme>
  <sdds-header name="My Application"></sdds-header>
  `
};

export const HeaderComps = HeaderComp.bind({});
HeaderComps.args = {};