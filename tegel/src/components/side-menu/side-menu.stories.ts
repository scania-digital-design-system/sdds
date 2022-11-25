import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Side menu',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
  argTypes: {
    collapsed: {
      name: 'Collapsed',
      control: {
        type: 'boolean',
      },
    },
    showIcons: {
      name: 'Show icons',
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
  .sdds-demo-container {
    align-items: stretch;
    height: calc(100% - 64px);
  }
  .sdds-container {
    overflow-y: auto;
    max-width: 10000px;
  }
</style>
<nav class="sdds-nav">
  <div class="sdds-nav__left">
    <button class="sdds-nav__mob-menu-btn">
    <sdds-icon name="burger" size="20px" /> 
    </button>
    <div class="sdds-nav__app-name">My application</div>
  </div>
  <div class="sdds-nav__right">
    <a class="sdds-nav__item sdds-nav__app-logo" href="#"></a>
  </div>
</nav>

<div class="sdds-push sdds-demo-container">
  <div class="sdds-sidebar side-menu ${collapsed ? 'collapsed' : ''}">
    <div class="sdds-sidebar-mheader">
      <a href="#" class="sdds-sidebar-mheader__close">
        <sdds-icon name="cross" size="20px" /> 
      </a>
    </div>

    <ul class="sdds-sidebar-nav sdds-sidebar-nav--main ${icons}">
      <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
        <a class="sdds-sidebar-nav__item-link" href="#">
          <div>
            <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"/>
          </div>
          <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
          <div>
            <sdds-icon class="sdds-sidebar-nav__chevron" name="chevron_down" size="16px"/>
          </div>
        </a>
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
      <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
      <a class="sdds-sidebar-nav__item-link" href="#">
      <div>
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"/>
      </div>
      <span class="sdds-sidebar-nav__item-text">Sub-menu</span>
      <div>
        <sdds-icon class="sdds-sidebar-nav__chevron" name="chevron_down" size="16px"/>
      </div>
       </a>
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
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"/>
      </div>
          <span class="sdds-sidebar-nav__item-text">Page link</span>
        </a>
      </li>
      <li class="sdds-sidebar-nav__item">
        <a class="sdds-sidebar-nav__item-link" href="#">
        <div>
        <sdds-icon class="sdds-sidebar-nav__icon" name="truck" size="20px"/>
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
  expandableListItems = document.getElementsByClassName('sdds-sidebar-nav__extended');

  for (let i = 0; i < expandableListItems.length; i++) {
    expandableListItems[i].addEventListener('click', (event) => {
      event.preventDefault();
      document
        .getElementsByClassName('sdds-sidebar-nav__extended')
        [i].classList.toggle('subnav-open');
    });
  }
</script>

  `);
};

export const Default = Template.bind({});

Default.args = {};
