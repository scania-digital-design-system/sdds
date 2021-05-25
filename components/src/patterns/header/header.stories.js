import readme from './readme.md';

export default {
  title: 'Patterns/Header',
  argTypes: {
    siteName: { 
      type: 'string',
      defaultValue: 'Application'
    },
    shortName: { 
      type: 'string',
      defaultValue: 'Application'
    },
    siteUrl: { 
      type: 'string',
      defaultValue: 'http://digitaldesign.scania.com'
    },
  },
  parameters: {
    notes: readme,
  },
};

const Template = ({siteName, shortName, siteUrl, items}) => {
  return `
  <sdds-theme></sdds-theme>
  
  <nav class="sdds-navbar">
    <button class="sdds-navbar-icon-button sdds-navbar-side-menu-toggler">
      <span class="sdds-icon-toggler"></span>
    </button>
    <div class="sdds-navbar-application-brand">${siteName}</div>
    <div class="sdds-navbar__overlay"></div>

    <div class="sdds-navbar-top-menu sdds-navbar-menu">
      <ul class="sdds-navbar-menu-nav">
        <li class="sdds-navbar-menu-item active">
          <i class="sdds-icon scania-truck"></i>
          <a class="sdds-navbar-menu-nav-link" href="#"> Item 1</a>
        </li>
        <li class="sdds-navbar-menu-item">
          <a class="sdds-navbar-menu-nav-link" href="#" target="_blank"> Item 2 </a>
        </li>
        <li class="sdds-navbar-menu-item-dropdown sdds-navbar-menu__dropdown--opened">
          <div class="sdds-navbar-menu__dropdown-header">
            <span class="sdds-navbar-menu-nav-link"> Item 3 </span>
            <span class="sdds-icon-arrow"></span>
          </div>
          <ul class="sdds-navbar-menu__dropdown-menu">
            <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3 long label...</a></li>
            <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3</a></li>
            <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3 long label...</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="sdds-navbar-right-menu">
      <div class="sdds-navbar-dropdown sdds-navbar-menu__dropdown--opened">
        <button class="sdds-navbar__open-button sdds-navbar__dropdown-action">
          <span>EN</span>
          <span class="show-on-mobile">&nbsp;Change language</span>
          <i class="fal fa-angle-down fa-2x nav-link__drop-down-icon show-on-mobile"></i>
        </button>
        <ul class="sdds-navbar__dropdown-menu sdds-navbar__system-menu sdds-navbar__dropdown-menu--visible">
          <li class="sdds-navbar__dropdown-item active"><a href="#">English</a></li>
          <li class="sdds-navbar__dropdown-item"><a href="#">French</a></li>
          <li class="sdds-navbar__dropdown-item"><a href="#">Greek</a></li>
          <li class="sdds-navbar__dropdown-item"><a href="#">Indonesia</a></li>
          <li class="sdds-navbar__dropdown-item"><a href="#">Svenska</a></li>
        </ul>
      </div>
    </div>
    <div class="sdds-navbar-brand">
      <a href="#" class="sdds-navbar-brand__image"></a>
    </div>

  </nav>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  siteName: 'My Application',
  shortName: 'My App',
  siteUrl: 'http://digitaldesign.scania.com'
}

export const WithLinks = Template.bind({});
WithLinks.args = {
  ...Basic.args,
  items: `
  <a href='global' slot='items'>global</a>
  `
};