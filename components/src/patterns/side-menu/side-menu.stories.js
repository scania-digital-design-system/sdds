export default {
    title: 'Patterns/SideMenu'
  };
  
const Template = ({icon=false, dropdown = false}) => {

  const icons = icon ? ` <span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>` : '';

  return `
  <sdds-theme></sdds-theme>
  <div class="sdds-navbar-overlay expanded"></div>

  <nav class="sdds-navbar">
    <button id="menu-mobile" class="sdds-navbar-icon-button sdds-navbar-side-menu-drawer expanded">
      <span class="sdds-icon-drawer"></span>
    </button>
    <div class="sdds-navbar-application-brand">Application</div>

    <div class="sdds-navbar-scania-brand"></div>
  </nav>

  <div class="sdds-push">
    <div class="sdds-sidebar">

      <div class="sdds-navbar-side-menu expanded">
      <ul class="sdds-navbar-menu-list">
        <li class="sdds-navbar-menu-item active">
            <a class="sdds-navbar-menu-item-link" href="#"> 
            ${icons}
            Item 1 
            </a>
        </li>
        <li class="sdds-navbar-menu-item">
            <a class="sdds-navbar-menu-item-link" href="#"> 
            ${icons}
            Item 2 
            </a>
        </li>
        <li class=" ${dropdown ? 'sdds-navbar-menu-item-dropdown opened':'sdds-navbar-menu-item'}">
            <a class="sdds-navbar-menu-item-link" href="#"> 
            ${icons}
            
            ${dropdown ? '<span class="sdds-menu-item-dropdown-text">Item 3</span><span class="sdds-icon-arrow"></span>' : 'Item 3 '}
            </a>
            ${
              dropdown ?
              `<ul class="sdds-navbar-menu__dropdown-menu">
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-1 long label...</a></li>
                <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3-2</a></li>
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-3</a></li>
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-4 long label...</a></li>
              </ul>` : ''
            }
        </li>
        <li class="sdds-navbar-menu-item">
            <a class="sdds-navbar-menu-item-link" href="#"> 
            ${icons}
            Item 4 
            </a>
        </li>
        </ul>
      </div>

    </div>
    
    <div class="sdds-content-push">
      <div class="sdds-container-push-fluid">
        <div class="sdds-row">
          <div class="sdds-col">Content 1</div>
          <div class="sdds-col">Content 2</div>
        </div>
      </div>
    </div>
  </div>
  `
};
  
export const Basic = Template.bind({});

Basic.args = {
  icon: false
}

export const WithIcons = Template.bind({});

WithIcons.args = {
  icon: true,
  dropdown:false
}

export const Dropdown = Template.bind({});

Dropdown.args = {
  dropdown: true
}