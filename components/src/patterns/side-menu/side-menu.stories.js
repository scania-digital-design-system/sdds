export default {
  title: 'Patterns/SideMenu',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const { icon = true, collapsible = false } = args;
  const icons = icon ? 'icons-enabled' : 'icons-disabled';

  const style = `
  <style>
    html, body, #root, #storybook-addon-themes {
      height: 100%;
      padding:0;
      overflow: hidden;
      position: relative;
    }   
    .sdds-demo-container {
      align-items: stretch;
      height: calc(100% - 64px);
    }
    .sdds-container {
      overflow-y:auto;
      max-width: 10000px;
    }
  </style>
  `;

  let DOMContentLoaded = false;
  document.addEventListener('DOMContentLoaded', () => {
    if (DOMContentLoaded) {
      return;
    }
    DOMContentLoaded = true;

    console.log('side menu : domcontent loaded');

    const sidebarElement = document.querySelector('.sdds-sidebar.side-menu');
    const sidebarElementToggle = sidebarElement.querySelector(
      '.sdds-sidebar-toggle'
    );
    sidebarElementToggle &&
      sidebarElementToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarElement.classList.toggle('collapsed');
      });

    const menuElementOpen = document.querySelector('.sdds-nav__mob-menu-btn');
    menuElementOpen &&
      menuElementOpen.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarElement.classList.add('mobile-menu-open');
      });

    const menuElementClose = document.querySelector(
      '.sdds-sidebar-mheader__close'
    );
    menuElementClose &&
      menuElementClose.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarElement.classList.remove('mobile-menu-open');
      });

    const submenus = sidebarElement.querySelectorAll(
      '.sdds-sidebar-nav__extended'
    );
    if (submenus) {
      submenus.forEach((submenuEl) => {
        submenuEl.addEventListener('click', (e) => {
          e.preventDefault();
          submenuEl.classList.toggle('subnav-open');
        });
      });
    }
  });

  return `
  ${style}
   <nav class='sdds-nav'>
      <div class='sdds-nav__left'>

        <button class='sdds-nav__mob-menu-btn'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.97 6.998a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1ZM3.97 15.982a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1ZM3.97 24.966a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1Z" fill="currentColor"/>
          </svg>
        </button>

        <div class='sdds-nav__app-name'>My application</div>

      </div>
      <div class='sdds-nav__right'>
        <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
      </div>
  </nav>

  <div class="sdds-push sdds-demo-container">

    <div class="sdds-sidebar side-menu">

      <div class="sdds-sidebar-mheader">
        <a href="#" class="sdds-sidebar-mheader__close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40338 2.34308C3.11048 2.05019 2.63561 2.05019 2.34272 2.34308C2.04982 2.63598 2.04982 3.11085 2.34272 3.40374L6.93897 8L2.34283 12.5961C2.04994 12.889 2.04994 13.3639 2.34283 13.6568C2.63572 13.9497 3.1106 13.9497 3.40349 13.6568L7.99963 9.06066L12.5958 13.6568C12.8887 13.9497 13.3635 13.9497 13.6564 13.6568C13.9493 13.3639 13.9493 12.889 13.6564 12.5961L9.06029 8L13.6565 3.40376C13.9494 3.11086 13.9494 2.63599 13.6565 2.3431C13.3636 2.0502 12.8888 2.0502 12.5959 2.3431L7.99963 6.93934L3.40338 2.34308Z" fill="#171719"/>
          </svg>
        </a>
      </div>

      <ul class="sdds-sidebar-nav sdds-sidebar-nav--main ${icons}">

        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

        <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
            <svg class="sdds-sidebar-nav__chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <ul class="sdds-sidebar-nav-subnav">
            <li class="sdds-sidebar-nav-subnav__item">
              <span class="sdds-sidebar-nav__item-title">Sub-menu</span>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
          </ul>
        </li>

        <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended subnav-open">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
            <svg class="sdds-sidebar-nav__chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <ul class="sdds-sidebar-nav-subnav">
            <li class="sdds-sidebar-nav-subnav__item">
              <span class="sdds-sidebar-nav__item-title">Sub-menu</span>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
            <li class="sdds-sidebar-nav-subnav__item sdds-item--active">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a>
            </li>
          </ul>
        </li>

        <li class="sdds-sidebar-nav__item sdds-item--active">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
           <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
            <span class="sdds-sidebar-nav__item-text">Page link</span>
          </a>
        </li>

      </ul>


      ${
        collapsible
          ? `
          <ul class="sdds-sidebar-nav sdds-sidebar-nav--bottom ${icons}">
          <li class="sdds-sidebar-nav__item">
            <a class="sdds-sidebar-toggle sdds-sidebar-nav__item-link" href="#">
              <svg class="sdds-sidebar-nav__icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.046 5.685a1 1 0 0 0-1.414-1.415l-9.9 9.9a2.6 2.6 0 0 0 0 3.678l9.9 9.9a1 1 0 1 0 1.415-1.415L4.722 17.01h24.306a1 1 0 0 0 0-2H4.722l9.325-9.324Z" fill="currentColor"/>
              </svg>
              <span class="sdds-sidebar-nav__item-text">Collapse</span>
            </a>
          </li>
        </ul>
      `
          : ''
      }


    </div>

    <div class="sdds-container" style="padding-top: 30px;">
      <div class="sdds-row">

        <div class="sdds-col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

        <div class="sdds-col">
          Filler content to enable scrolling.<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
          |<br>
        </div>

      </div>
    </div>
  </div>
  `;
};

export const NonCollapsible = Template.bind({});

NonCollapsible.args = {
  icon: false,
};

export const NonCollapsibleIcons = Template.bind({});

NonCollapsibleIcons.args = {
  icon: true,
};

export const Collapsible = Template.bind({});

Collapsible.args = {
  collapsible: true,
};
