import readme from './readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Header',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
  argTypes: {
    siteName: {
      name: 'Site name',
      type: 'string',
    },
  },
  args: {
    siteName: 'Application',
  },
};

const InlineMenuTemplate = (args) => {
  const { siteName, openInlineDropdown = true, openMobileMenu = false } = args;

  return formatHtmlPreview(
    `
      <style>
      .demo-wrapper {
        font-size: 14px;
      }
    </style>
  <div class="demo-wrapper">
    <nav class='sdds-nav  
      ${openMobileMenu && 'sdds-nav__mob-menu--opened'} 
       '>     
        <div class='sdds-nav__left'>
          <div class="sdds-nav__overlay" onclick="closeDropdownsFromOverlay()"></div>
          <button class='sdds-nav__mob-menu-btn' onclick='toggleMobileMenu()'>
              <div id='sdds-nav__mob-menu-icon'>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-1'></span>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-2'></span>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-3'></span>
              </div>
          </button>
          <div class='sdds-nav__app-name'>${siteName}</div>
        </div>
        
        <div class='sdds-nav__center'>
          <ul class='sdds-nav__inline-menu'>
        
              <li class='sdds-nav__item'>
                  <a class='sdds-nav__item-core' href='#'>
                      <p class='sdds-nav__item-core-text'>Item 1</p>
                  </a>
              </li>
        
              <li class='sdds-nav__item sdds-nav__item--active'>
                  <a class='sdds-nav__item-core ' href='#'>
                      <p class='sdds-nav__item-core-text'>Item 2</p>
                  </a>
              </li>
        
              <li class='sdds-nav__item sdds-nav__dropdown ${
                openInlineDropdown && 'sdds-nav__dropdown--opened'
              }'>
              <button class='sdds-nav__item-core' onclick='toggleInlineDropdown()'>
                  <p class='sdds-nav__item-core-text'>Item 3</p>
                  <span class='sdds-nav__dropdown-icon'>
                    <sdds-icon class="sdds-nav__dropdown-icon-svg" name="chevron_down" size="16px" />                                                                          
                  </span>
              </button>
              <ul class='sdds-nav__dropdown-menu'>
                  <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3 long label...</a></li>
                  <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3</a></li>
                  <li class='sdds-nav__dropdown-item sdds-nav__dropdown-item--active'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3 long label...</a></li>
              </ul>
              </li>
          </ul>  
        </div>
        
        <div class='sdds-nav__right'>       
          <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
        </div> 
    </nav>
    </div>
    <script>

    toggleMobileMenu = () => {
        document.getElementsByClassName("sdds-nav")[0].classList.toggle("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__avatar--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.remove("sdds-nav__dropdown--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");
    }

    toggleInlineDropdown = () => {
        document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.toggle("sdds-nav__dropdown--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__avatar--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");
    }
  
    closeDropdownsFromOverlay = () => {
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");
  
    }
    </script>
    `,
  );
};

export const InlineMenu = InlineMenuTemplate.bind({});
InlineMenu.argTypes = {
  openInlineDropdown: {
    name: 'Open Inline Dropdown',
  },
  openMobileMenu: {
    name: 'Open Mobile Menu',
  },
};
InlineMenu.args = {
  siteName: 'Inline Menu App',
  openInlineDropdown: false,
  openMobileMenu: false,
};
