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
  <sdds-theme name="scania"></sdds-theme>
  
  <nav class="sdds-navbar">
    <button class="sdds-navbar-icon-button sdds-navbar-side-menu-toggler">
      <span class="sdds-icon-toggler"></span>
    </button>
    <div class="sdds-navbar-application-brand">${siteName}</div>
    <div class="sdds-navbar__overlay"></div>

    <div class="sdds-navbar-top-menu sdds-navbar-menu">
      <ul class="sdds-navbar-menu-nav">
        <li class="sdds-navbar-menu-item">
          <i class="sdds-icon scania-truck"></i>
          <a class="sdds-navbar-menu-nav-link" href="#"> Item 1</a>
          
        </li>
        <li class="sdds-navbar-menu-item">
          <a class="sdds-navbar-menu-nav-link" href="https://scania.com/se/sv/home/experience-scania.html" target="_blank"> Item 2 </a>
          
        </li>
      </ul>
    </div>

    <div class="sdds-navbar-right-menu">
      <a class="sdds-navbar-menu-nav-link" href="#">EN</a>
    </div>
    <div class="sdds-navbar-brand">
      <a href="https://scania.com" class="sdds-navbar-brand__image"></a>
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