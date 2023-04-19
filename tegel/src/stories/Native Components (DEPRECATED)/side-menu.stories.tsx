import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Side Menu',
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
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=3981%3A151372&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=3981%3A151372&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    collapsed: {
      name: 'Collapsed',
      description: 'Toggle the side menus collapsed state.',
      control: {
        type: 'boolean',
      },
    },
    showIcons: {
      name: 'Show icons',
      description: 'Toggle if icons for side menu options are displayed.',
      control: {
        type: 'boolean',
      },
      if: { arg: 'collapsed', neq: true },
    },
  },
  args: {
    collapsed: false,
    showIcons: false,
  },
};

const Template = ({ showIcons, collapsed }) => {
  const icons = showIcons || collapsed ? 'icons-enabled' : 'icons-disabled';

  return formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    align-items: stretch;
    height: 100vh;
  }
  .sdds-container {
    overflow-y: auto;
    max-width: 10000px;
  }
</style>

<nav class="sdds-nav">
  <div class="sdds-nav__left">
    <button class="sdds-nav__mob-menu-btn">
      <sdds-icon name="burger" size="20px"></sdds-icon>
    </button>
    <div class="sdds-nav__app-name">My application</div>
  </div>
  <div class="sdds-nav__right">
    <a class="sdds-nav__item sdds-nav__app-logo" href="#"></a>
  </div>
</nav>
<div class="sdds-push demo-wrapper">
  <div class="sdds-sidebar side-menu ${collapsed ? 'collapsed' : ''}">
    <div class="sdds-sidebar-mheader">
    <button class="sdds-sidebar-mheader__close">
      <sdds-icon name="cross" size="20px"></sdds-icon>
    </button>
    </div>
    <ul class="sdds-sidebar-nav sdds-sidebar-nav--main ${icons}">
      <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
        <button class="sdds-sidebar-nav__item-link">
          <div>
            <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"></sdds-icon>
          </div>
          <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
          <div>
            <sdds-icon class="sdds-sidebar-nav__chevron" name="chevron_down" size="16px"></sdds-icon>
          </div>
        </button>
        <ul class="sdds-sidebar-nav-subnav">
          <li class="sdds-sidebar-nav-subnav__item">
            <span class="sdds-sidebar-nav__item-title">Sub-menu</span>
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
        </ul>
      </li>
      <li class="sdds-sidebar-nav__item sdds-sidebar-nav__item--selected sdds-sidebar-nav__extended">
      <button class="sdds-sidebar-nav__item-link">
      <div>
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"></sdds-icon>
      </div>
      <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
      <div>
        <sdds-icon class="sdds-sidebar-nav__chevron" name="chevron_down" size="16px"></sdds-icon>
      </div>
      </button>
        <ul class="sdds-sidebar-nav-subnav">
          <li class="sdds-sidebar-nav-subnav__item">
            <span class="sdds-sidebar-nav__item-title">Sub-menu</span>
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
          <li class="sdds-sidebar-nav-subnav__item">
            <a class="sdds-sidebar-nav__item-link" href="#"
              ><span class="sdds-sidebar-nav__item-text">Sub Page name</span></a
            >
          </li>
        </ul>
      </li>
      <li class="sdds-sidebar-nav__item">
        <a class="sdds-sidebar-nav__item-link" href="#">
        <div>
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"></sdds-icon>
      </div>
          <span class="sdds-sidebar-nav__item-text">Page link</span>
        </a>
      </li>
      <li class="sdds-sidebar-nav__item">
        <a class="sdds-sidebar-nav__item-link" href="#">
        <div>
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"></sdds-icon>
      </div>
          <span class="sdds-sidebar-nav__item-text">Page link</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="sdds-container" style="padding-top: 30px">
  </div>
</div>


<script>
    /* Note: Code below is used only for inspiration and presentation purposes in Storybook */
  document.querySelector('button.sdds-nav__mob-menu-btn').addEventListener('click', () => {
    document.querySelector('.side-menu').classList.toggle('mobile-menu-open')
  })
  document.querySelector('button.sdds-sidebar-mheader__close').addEventListener('click', () => {
    document.querySelector('.side-menu').classList.toggle('mobile-menu-open')
  })
  expandableListItems = document.getElementsByClassName('sdds-sidebar-nav__extended');
  for (let i = 0; i < expandableListItems.length; i++) {
    expandableListItems[i].addEventListener('click', () => {
      document.getElementsByClassName('sdds-sidebar-nav__extended')[i].classList.toggle('subnav-open');
    });
  }
</script>
  `);
};

export const Native = Template.bind({});
