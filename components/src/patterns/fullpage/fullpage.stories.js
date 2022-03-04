export default {
  title: 'Patterns/Fullpage',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = ({ menuCollapse = false }) => {
  document.body.classList.add('sdds');

  return `

    
     <nav class='sdds-nav'>     
      <div class='sdds-nav__left'>
        <div class='sdds-nav__app-name'>Application</div>
      </div>  
      <div class='sdds-nav__right'>  
        <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
      </div> 
    </nav>

    <div class="sdds-push" style="margin-top:-64px">
      <div class="sdds-sidebar expanded ${
        menuCollapse ? 'sdds-sidebar-collapse' : ''
      }">
        <div class="sdds-navbar-side-menu expanded">
          <ul class="sdds-navbar-menu-list">
            <li class="sdds-navbar-menu-item">
              <span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>
              <a class="sdds-navbar-menu-item-link" href="#"> 
              Item 1 
              </a>
            </li>
            <li class="sdds-navbar-menu-item-dropdown opened">
              <div class="sdds-navbar-menu-item-dropdown-parent">
                <span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>
                <a class="sdds-navbar-menu-item-link" href="#"> 
                  <span class="sdds-menu-item-dropdown-text">Item 3</span>
                  <span class="sdds-icon-arrow"></span>
                </a>
              </div>
              <ul class="sdds-navbar-menu__dropdown-menu">
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-1 long label...</a></li>
                <li class="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3-2</a></li>
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-3</a></li>
                <li class="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-4 long label...</a></li>
              </ul>
            </li>
          </ul>
          <div class="sdds-navbar-menu-item sdds-navbar-menu-item-bottom sdds-navbar-menu-hide-on-mobile"  onClick="clickCollapse()">
            <span class="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/> </svg></span>
            <a id="collapse-btn" class="sdds-navbar-menu-item-link" href="#"> 
            Collapse
            </a>
          </div>
        </div>
        <div id="popover" class="sdds-navbar-menu-popover" style="display:none;position:fixed;"></div>
      </div>

      <div class="sdds-container-fluid sdds-content">
        <div class="sdds-row">
          <div class="sdds-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

          <div class="sdds-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>          
        </div>

        <div class="sdds-footer sdds-col-max-12">
          <div class="sdds-footer-top sdds-container-fluid">
            <div class="sdds-row">
              <div class="sdds-footer-top-col sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
                <div class="sdds-footer-title opened">
                  <span>Title 1</span>
                  <span class="sdds-footer-top-icon">
                    <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>
                  </span>
                </div>
                <ul class="sdds-footer-main-links opened">
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                </ul>
              </div>

              <div class="sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
                <div class="sdds-footer-title">
                  <span>Title 2</span>
                  <span class="sdds-footer-top-icon">
                    <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>
                  </span>
                </div>
                <ul class="sdds-footer-main-links">
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                  <li><a href="#">Legal link</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sdds-footer-main">
            <ul class="sdds-footer-main-links">
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
            </ul>
            <ul class="sdds-footer-social-links">
              <li><a href="#">Social 1</a></li>
              <li><a href="#">Social 1</a></li>
              <li><a href="#">Social 1</a></li>
            </ul>
            <div class="sdds-footer-main-brand">
              <p>Copyright &copy; 2022 Scania</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    `;
};

export const Basic = Template.bind({});
export const MenuCollapse = Template.bind({});
MenuCollapse.args = {
  menuCollapse: true,
};
