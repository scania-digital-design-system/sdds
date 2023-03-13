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
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11142%3A42941&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    siteName: {
      name: 'Site name',
      description: 'Sets a custom title for the header.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    siteName: 'Application',
  },
};

const SearchbarMenuTemplate = ({ siteName }) =>
  formatHtmlPreview(
    `
    <nav class='sdds-nav'>
        <div class='sdds-nav__left'>
          <div class="sdds-nav__overlay" onclick="closeDropdownsFromOverlay()"></div>
          <button class='sdds-nav__mob-menu-btn' onclick='toggleMobileMenu()'>
              <span id='sdds-nav__mob-menu-icon'>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-1'></span>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-2'></span>
                  <span class='sdds-nav__mob-menu-icon-line' id='sdds-nav__mob-menu-icon-line-3'></span>
              </span>
          </button>
          <div class='sdds-nav__app-name'>${siteName}</div>
        </div>

        <div class='sdds-nav__center sdds-nav__center-withsearch'>
        <ul class='sdds-nav__inline-menu'>

        <li class='sdds-nav__item'>
            <a class='sdds-nav__item-core' href='#'>
                <span class='span'>Item 1</span>
            </a>
        </li>

        <li class='sdds-nav__item sdds-nav__item--active'>
            <a class='sdds-nav__item-core ' href='#'>
                <span class='sdds-nav__item-core-text'>Item 2</span>
            </a>
        </li>

        <li class='sdds-nav__item sdds-nav__dropdown'>
        <button class='sdds-nav__item-core' onclick='toggleInlineDropdown()'>
            <span class='sdds-nav__item-core-text'>Item 3</span>
            <span class='sdds-nav__dropdown-icon'>
              <sdds-icon class="sdds-nav__dropdown-icon-svg" name="chevron_down" size="16px"></sdds-icon> 
            </span>
        </button>
        <ul class='sdds-nav__dropdown-menu'>
            <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3 long label...</a></li>
            <li class='sdds-nav__dropdown-item'><button class='sdds-nav__dropdown-item-core'>Sub item 3</button></li>
            <li class='sdds-nav__dropdown-item sdds-nav__dropdown-item--active'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3 long label...</a></li>
        </ul>
        </li>
      </ul>
      <div class="sdds-nav__app-searchbar-container">
      <div class="sdds-nav__app-searchbar">
        <div class="sdds-nav__searchbar-input-expanded">
          <ul class='sdds-nav__searchbar-menu'>
              <li class='sdds-nav__searchbar-item--top' tabindex="0">
                    <p class='sdds-nav__searchbar-all-results'>
                    <sdds-icon name="search" class="sdds-nav__app-searchbar-results-mgl-svg"></sdds-icon>
                    See all search results <span>(press enter)</span>
                    </p>
              </li>
            <ul class='sdds-nav__searchbar-results--category'>
              <p class='sdds-nav__searchbar-results-category-title'>USERS</p>
            <li class='sdds-nav__searchbar-results-item'>
              <a href='' class='sdds-nav__searchbar-results-item-core'>User – Eric Mattsson – IXCD Visual designer </a>
              <button class="sdds-nav__app-searchbar-results-x-btn">
                <div>
                  <sdds-icon class="sdds-nav__app-searchbar-results-x-btn" name="cross" size="16px"></sdds-icon> 
                </div>
              </button>
            </li>
            <li class='sdds-nav__searchbar-results-item'>
              <a href='' class='sdds-nav__searchbar-results-item-core'>User– Eric Mattsson – IXCD Visual designer </a>
              <button class="sdds-nav__app-searchbar-results-x-btn">
              <div>
              <sdds-icon class="sdds-nav__app-searchbar-results-x-btn" name="cross" size="16px"></sdds-icon> 
            </div>              </button>
              </li>
            </ul>
            <ul class='sdds-nav__searchbar-results--category'>
              <p class='sdds-nav__searchbar-results-category-title'>TEAMS</p>

            <li class='sdds-nav__searchbar-results-item'>
              <a href='' class='sdds-nav__searchbar-results-item-core'>Team– Eric Mattsson – IXCD Visual designer </a>
              <button class="sdds-nav__app-searchbar-results-x-btn">
              <div>
              <sdds-icon class="sdds-nav__app-searchbar-results-x-btn" name="cross" size="16px"></sdds-icon> 
            </div>             </button>
              </li>
          </ul>
        </ul>
        <input class="sdds-nav__searchbar-input" type="text" placeholder="Search">
          <button class="sdds-nav__app-searchbar-btn sdds-nav__app-searchbar-x-btn" onclick="toggleSearchbar()">
            <sdds-icon class="sdds-nav__app-searchbar-btn-svg" name="cross" size="20px"></sdds-icon> 
          </button>

      </div>
       <button class="sdds-nav__app-searchbar-btn sdds-nav__app-searchbar-mgl-btn" onclick="toggleSearchbar()">
          <sdds-icon class="sdds-nav__app-searchbar-btn-svg" name="search" size="20px"></sdds-icon> 
      </button>
    </div>
  </div>
    <ul class='sdds-nav__toolbar-menu'>

        <li class='sdds-nav__item sdds-nav__avatar'>
            <button class='sdds-nav__avatar-btn' onclick='toggleAvatarMenu()'>
                <img class="sdds-nav__avatar-img" src='https://www.svgrepo.com/show/170303/avatar.svg' alt='profile photo'/>
                <span class='sdds-nav__avatar-info sdds-nav__avatar-info--mobile'>
                    <span class='sdds-nav__avatar-title'>Employee Name</span>
                    <span class='sdds-nav__avatar-subtitle'>Company Name</span>
                </span>
            </button>

            <ul class='sdds-nav__avatar-menu'>
                <li class='sdds-nav__avatar-item sdds-nav__avatar-item--large'>
                    <span class='sdds-nav__avatar-info'>
                        <span class='sdds-nav__avatar-title'>Employee Name</span>
                        <span class='sdds-nav__avatar-subtitle'>Company Name</span>
                    </span>
                </li>
                <li class='sdds-nav__avatar-item'>
                    <a href='' class='sdds-nav__avatar-item-core'>Link 1</a>
                </li>
                <li class='sdds-nav__avatar-item'>
                    <button class='sdds-nav__avatar-item-core'>Logout</button>
                </li>
            </ul>
        </li>
        </ul>
        </div>
        <div class='sdds-nav__right'>
          <div class='sdds-nav__item sdds-nav__app-launcher'>
              <button class='sdds-nav__app-launcher-btn' onclick='toggleAppLauncher()'>
                <sdds-icon class="sdds-nav__app-launcher-btn-svg" name="bento" size="20px"></sdds-icon> 
              </button>
              <ul class='sdds-nav__app-launcher-menu'>
                  <li class='sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category'>
                      <p class='sdds-nav__app-launcher-category-title'>Category 1</p>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 1</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 2</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 3</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 4</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 5</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 6</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category'>
                      <p class='sdds-nav__app-launcher-category-title'>Category 2</p>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 1</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 2</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 3</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 4</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 5</a>
                  </li>
                  <li class='sdds-nav__app-launcher-item'>
                      <a href='' class='sdds-nav__app-launcher-item-core'>Application 6</a>
                  </li>
              </ul>
          </div>
          <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
        </div>
    </nav>

    <script>
    /* Note: Code below is used only for inspiration and presentation purposes in Storybook */
    toggleAvatarMenu = () => {
        document.getElementsByClassName("sdds-nav")[0].classList.toggle("sdds-nav__avatar--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.remove("sdds-nav__dropdown--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");
    }
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

    toggleAppLauncher = () => {
      document.getElementsByClassName("sdds-nav")[0].classList.toggle("sdds-nav__app-launcher--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
      document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.remove("sdds-nav__dropdown--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__avatar--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");
    }

    closeDropdownsFromOverlay = () => {
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__searchbar--opened");

    }

    toggleSearchbar = () => {
      document.getElementsByClassName("sdds-nav")[0].classList.toggle("sdds-nav__searchbar--opened");
      document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.remove("sdds-nav__dropdown--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__avatar--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
      document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__app-launcher--opened");
  }
    </script>
    `,
  );

export const SearchbarMenu = SearchbarMenuTemplate.bind({});
