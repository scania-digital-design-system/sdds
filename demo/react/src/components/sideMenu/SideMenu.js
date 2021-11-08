import React, { useState } from 'react';
import SideMenuItem from './components/sideMenuItem/SideMenuItem';
import IconButton from './components/IconButton/IconButton';
import SideMenuDropdownItem from './components/sideMenuDropdownItem/sideMenuDropdownItem';

function SideMenu() {
  const [collapse, setCollapse] = useState(false);
  const clickCollapse = () => setCollapse(!collapse);

  return (
    <div
      className={`sdds-sidebar expanded ${
        collapse ? 'sdds-sidebar-collapse' : ''
      }`}
      style={{ height: '100%' }}
    >
      <div className={`sdds-navbar-side-menu expanded`}>
        <ul className="sdds-navbar-menu-list">
          <SideMenuItem itemName={'Item 1'} collapse={collapse} />
          <SideMenuDropdownItem itemName={'Item 1'} collapse={collapse} />
          <SideMenuDropdownItem
            itemName={'Item 2'}
            collapse={collapse}
            itemList={[
              { name: 'Sub-item 1' },
              { name: 'Sub-item 2' },
              { name: 'Sub-item 3' },
            ]}
          />
        </ul>

        <div
          className="sdds-navbar-menu-item sdds-navbar-menu-item-bottom sdds-navbar-menu-hide-on-mobile"
          onClick={() => clickCollapse()}
        >
          <IconButton />
          <a id="collapse-btn" className="sdds-navbar-menu-item-link" href="#">
            Collapse
          </a>
        </div>
      </div>
      {/*<div id="popover" className="sdds-navbar-menu-popover" style={{display: 'none', position: 'fixed'}}/>*/}
    </div>
  );
}

export default SideMenu;
