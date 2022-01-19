import React, { useState } from 'react';
import SideMenuItem from './components/sideMenuItem/SideMenuItem';
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
        <ul className="sdds-navbar-menu-list sdds-navbar-menu-list--extended">
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
        <button
          className={`collapse-btn sdds-collapse-button sdds-navbar-menu-item sdds-navbar-menu-item-bottom hide-collapse-button 
          ${collapse ? 'collapse-button-collapse' : ''}`}
          onClick={() => clickCollapse()}
        >
          <span
            className={`sdds-collapse-button--icon ${
              collapse ? 'sdds-collapse-button--icon--collapsed' : ''
            }`}
          >
            <sdds-icon style={{ fontSize: 30 }} name="scania-arrow" />
          </span>
          <p className="sdds-collapse-button--text">Collapse</p>
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
