# Introduction
The side menu should always be paired with the functional header, when it is used for applications with more than 3 sections. It is available in two types; non-collapsible and collapsible. See Usage tab for more information on the design requirements. You can find an working example in the link at the end of the page.


# Basic structure
To use the side menu you need to use the basic structural setup with a base header and then a side menu and content area nested in a container with the class sdds-push. Note that the header should have a .sdds-nav__mob-menu-btn in it so you have something from to trigger the side-menus open state on lower breakpoints.

--------------------------------------------
<sdds-theme></sdds-theme>
<nav class='sdds-nav sdds-nav__sidemenu'>
	Header content goes here...
</nav>
<div class="sdds-push">
	<div class="sdds-sidebar side-menu">
		Side menu content goes here...
	</div>
	<div class="sdds-container">
		Page content goes here...
	</div>
</div>
--------------------------------------------



# Side menu structure
The side menu is built up by a wrapper and three main sections. The header, the main content section, and the side menu footer. However the footer sections is only needed if you intend to have a collapsable side menu.

--------------------------------------------
<div class="sdds-sidebar side-menu">
  <div class="sdds-sidebar-mheader">
    Only displays on lower breakpoints
  </div>
  <ul class="sdds-sidebar-nav sdds-sidebar-nav--main">
    Menu items goes here...
  </ul>
  <ul class="sdds-sidebar-nav sdds-sidebar-nav--bottom">
    Sticky bottom items goes here...
  </ul>
</div>
--------------------------------------------


# Side menu header
The side-menu header is simply used to display to close button on lower breakpoints

--------------------------------------------
<div class="sdds-sidebar-mheader">
    <a class="sdds-sidebar-mheader__close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.40338 2.34308C3.11048 2.05019 2.63561 2.05019 2.34272 2.34308C2.04982 2.63598 2.04982 3.11085 2.34272 3.40374L6.93897 8L2.34283 12.5961C2.04994 12.889 2.04994 13.3639 2.34283 13.6568C2.63572 13.9497 3.1106 13.9497 3.40349 13.6568L7.99963 9.06066L12.5958 13.6568C12.8887 13.9497 13.3635 13.9497 13.6564 13.6568C13.9493 13.3639 13.9493 12.889 13.6564 12.5961L9.06029 8L13.6565 3.40376C13.9494 3.11086 13.9494 2.63599 13.6565 2.3431C13.3636 2.0502 12.8888 2.0502 12.5959 2.3431L7.99963 6.93934L3.40338 2.34308Z" fill="#171719"/></svg>
    </a>
</div>
--------------------------------------------


# Side menu items
The menu options are to be placed as li.sdds-sidebar-nav__item within ul.sdds-sidebar-nav--main.

--------------------------------------------
<ul class="sdds-sidebar-nav sdds-sidebar-nav--main">
  <li class="sdds-sidebar-nav__item"></li>
  <li class="sdds-sidebar-nav__item"></li>
  <li class="sdds-sidebar-nav__item"></li>
</ul>
--------------------------------------------

The basic structure of a side menu item is as follows:

--------------------------------------------
<li class="sdds-sidebar-nav__item">
  <a class="sdds-sidebar-nav__item-link">
    <span>Page link</span>
  </a>
</li>
--------------------------------------------

!! The side menu has an active state that is displayed by adding the class sdds-item--active to the item by a method of you choice.



# Side menu item with sub page options
To use sup page options on a side menu item firstly add the class .sdds-sidebar-nav__extended and the inline svg for the chevron icon to the side menu item container. Then at the end within the side menu item add the sub page container. Note that every sub page container should have a .sdds-sidebar-nav__item-title in its first item, this is to display the item title in the sub page options popup in collapsed state.

--------------------------------------------
<li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
  <a class="sdds-sidebar-nav__item-link">
    <span>Sub-menu</span>
     <svg class="sdds-sidebar-nav__chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <!-- Sub menu -->
    <ul class="sdds-sidebar-nav-subnav">
      <li class="sdds-sidebar-nav__title"><span>Sub-menu</span></li>
      <li class="sdds-sidebar-nav__item">
        <a class="sdds-sidebar-nav__item-link" href="#"><span>Sub Page name</span></a>
      </li>
      <li class="sdds-sidebar-nav__item">
        <a class="sdds-sidebar-nav__item-link" href="#"><span>Sub Page name</span></a>
      </li>
    </ul>
    <!-- Sub menu ends -->
  </a>
</li>
--------------------------------------------

!! Toggle the display of the sup page items with the class .subnav-open on the side menu parent.
!! Toggle a sup page options active state with the class .sdds-item--active to the item by a method of you choice.



# Icons
Icons should be in svg format and have the class .sdds-sidebar-nav__icon. Appropriate to use can be found in the icons library. If you opt to not have icons you can simply not add the markup. Or if you are looking for a more dynamic solution you can toggle the visibility of icons with the class icons-disabled on the .sdds-sidebar-nav--main container.

--------------------------------------------
<li class="sdds-sidebar-nav__item">
  <a class="sdds-sidebar-nav__item-link">
    <!-- Icon --> <svg class="sdds-sidebar-nav__icon" width="20" height="20" viewBox="0 0 20 20" fill="#e2e2e4" xmlns="http://www.w3.org/2000/svg"><rect y="0.334473" width="20" height="20"/></svg>
    <span>Page link</span>
  </a>
</li>
--------------------------------------------



# Collapsible
Note that if you opt for a collapsible menu, you need to have icon added, since the collapsed state of the menu shows only the icons. To add a collapse-button simply put a .sdds-sidebar-nav__item (the same way you do any side menu item) in the .sdds-sidebar-nav--bottom container, and select an appropriate icon for it. We recommend arrow-left from the icon library. Below is an example with the recomended icon embeded.

--------------------------------------------
<ul class="sdds-sidebar-nav sdds-sidebar-nav--bottom">
  <li class="sdds-sidebar-nav__item">
    <a class="sdds-sidebar-nav__item-link">
      <svg class="sdds-sidebar-nav__icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.046 5.685a1 1 0 0 0-1.414-1.415l-9.9 9.9a2.6 2.6 0 0 0 0 3.678l9.9 9.9a1 1 0 1 0 1.415-1.415L4.722 17.01h24.306a1 1 0 0 0 0-2H4.722l9.325-9.324Z" fill="currentColor"/></svg>
      <span>Collapse</span>
    </a>
  </li>
</ul>
--------------------------------------------

!! Toggle the collapsed state with the class .collapsed on the .side-menu container.



# Responsive
The side menu collapses in to a hamburger-menu at lower breakpoints. To then access the menu you need to add the att a trigger to open the menu. Place the trigger on the .sdds-nav__mob-menu-btn in the header and make it add the class .mobile-menu-open to the .side-menu container. To close the menu, add a trigger to .sdds-sidebar-mheader__close that removes the class .mobile-menu-open.


# Full page example (basic)

--------------------------------------------
<body>
  <sdds-theme></sdds-theme>

  <!-- Header -->
  <nav class='sdds-nav'>
      <div class='sdds-nav__left'>
        <button class='sdds-nav__mob-menu-btn'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.97 6.998a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1ZM3.97 15.982a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1ZM3.97 24.966a1 1 0 0 1 1-1h22.05a1 1 0 0 1 0 2H4.97a1 1 0 0 1-1-1Z" fill="currentColor"/></svg>
        </button>
        <div class='sdds-nav__app-name'>My application</div>
      </div>
      <div class='sdds-nav__right'>
        <a class='sdds-nav__item sdds-nav__app-logo' href='#'></a>
      </div>
  </nav>

  <div class="sdds-push">
    <!-- Side menu -->
    <div class="sdds-sidebar side-menu">
      <!-- Side menu header -->
      <div class="sdds-sidebar-mheader">
        <a href="#" class="sdds-sidebar-mheader__close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.40338 2.34308C3.11048 2.05019 2.63561 2.05019 2.34272 2.34308C2.04982 2.63598 2.04982 3.11085 2.34272 3.40374L6.93897 8L2.34283 12.5961C2.04994 12.889 2.04994 13.3639 2.34283 13.6568C2.63572 13.9497 3.1106 13.9497 3.40349 13.6568L7.99963 9.06066L12.5958 13.6568C12.8887 13.9497 13.3635 13.9497 13.6564 13.6568C13.9493 13.3639 13.9493 12.889 13.6564 12.5961L9.06029 8L13.6565 3.40376C13.9494 3.11086 13.9494 2.63599 13.6565 2.3431C13.3636 2.0502 12.8888 2.0502 12.5959 2.3431L7.99963 6.93934L3.40338 2.34308Z" fill="#171719"/></svg>
        </a>
      </div>
      <!-- Side menu main -->
      <ul class="sdds-sidebar-nav sdds-sidebar-nav--main">
        <!-- Side menu main - Page link -->
        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <span>Page link</span>
          </a>
        </li>
        <!-- Side menu main - Sub menu -->
        <li class="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <span>Sub-menu</span>
            <svg class="sdds-sidebar-nav__chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <ul class="sdds-sidebar-nav-subnav">
            <li class="sdds-sidebar-nav-subnav__item">
              <span class="sdds-sidebar-nav__item-title">Sub-menu</span>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span>Sub Page name</span></a>
            </li>
            <li class="sdds-sidebar-nav-subnav__item">
              <a class="sdds-sidebar-nav__item-link" href="#"><span>Sub Page name</span></a>
            </li>
          </ul>
        </li>
        <!-- Side menu main - Page link -->
        <li class="sdds-sidebar-nav__item">
          <a class="sdds-sidebar-nav__item-link" href="#">
            <span>Page link</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Page Content -->
    <div class="sdds-container">
		  Page content goes here...
	  </div>
  </div>

</body>
--------------------------------------------

