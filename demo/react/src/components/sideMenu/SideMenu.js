import React, { useState } from 'react';
import SideMenuItem from './components/sideMenuItem/SideMenuItem';
import IconButton from './components/IconButton/IconButton';
import SideMenuDropdownItem from './components/sideMenuDropdownItem/sideMenuDropdownItem';

function SideMenu({ expand }) {
  const [collapse, setCollapse] = useState(false);
  const clickCollapse = () => setCollapse(!collapse);

  return (
    <div
      className={`sdds-sidebar expanded ${
        collapse ? 'sdds-sidebar-collapse' : ''
      }`}
    >
      <div className={`sdds-navbar-side-menu ${expand ? 'expanded' : null}`}>
        <ul className="sdds-navbar-menu-list">
          <SideMenuItem itemName={'Home'} link={'/'} collapse={collapse} />
          <SideMenuItem itemName={'Form'} link={'/form'} collapse={collapse} />
          <SideMenuDropdownItem
            itemName={'Dropdown 1'}
            collapse={collapse}
            itemList={[
              { name: 'Sub-item 1' },
              { name: 'Sub-item 2' },
              { name: 'Sub-item 3' },
            ]}
          />
          <SideMenuDropdownItem
            itemName={'Dropdown 2'}
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
          <a className="sdds-navbar-menu-item-link">Collapse</a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
