import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Header',
  parameters: {
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

const ToolbarMenuTemplate = ({ siteName }) =>
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

        <div class='sdds-nav__center'>
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
                  <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3</a></li>
                  <li class='sdds-nav__dropdown-item sdds-nav__dropdown-item--active'><a class='sdds-nav__dropdown-item-core' href='#'>Sub item 3 long label...</a></li>
              </ul>
              </li>
          </ul>

          <ul class='sdds-nav__toolbar-menu'>

              <li class='sdds-nav__item sdds-nav__avatar' >
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
                          <a href='' class='sdds-nav__avatar-item-core'>Logout</a>
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
    toggleAppLauncher = () => {
        document.getElementsByClassName("sdds-nav")[0].classList.toggle("sdds-nav__app-launcher--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__mob-menu--opened");
        document.getElementsByClassName("sdds-nav__item sdds-nav__dropdown")[0].classList.remove("sdds-nav__dropdown--opened");
        document.getElementsByClassName("sdds-nav")[0].classList.remove("sdds-nav__avatar--opened");
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

export const ToolbarMenu = ToolbarMenuTemplate.bind({});
