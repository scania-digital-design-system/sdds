import React, { useState } from 'react';
import IconButton from '../IconButton/IconButton';

const SideMenuDropdownItem = ({ itemName, collapse, itemList }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(0);

  const dropdownClick = () => {
    setDropdownOpened(!dropdownOpened);
  };

  function onHoverMenu(event) {
    setShowPopOver(true);
    const elem = event.target;
    setPosX(elem.getBoundingClientRect().left + elem.offsetWidth + 2);
    setPosY(elem.getBoundingClientRect().top);
  }

  return (
    <div
      className={`sdds-navbar-menu-item-dropdown sdds-navbar-menu-hover ${
        dropdownOpened ? 'opened' : null
      }`}
      onClick={() => (collapse ? null : dropdownClick())}
      onMouseEnter={(e) => onHoverMenu(e)}
      onMouseLeave={() => setShowPopOver(false)}
    >
      <div className="sdds-navbar-menu-item-dropdown-parent">
        <IconButton />
        <a className="sdds-navbar-menu-item-link" href={'#'}>
          <span className="sdds-menu-item-dropdown-text">{itemName}</span>
          {itemList && <span className="sdds-icon-arrow" />}
        </a>
      </div>

      {dropdownOpened && (
        <ul className={`sdds-navbar-menu__dropdown-menu`}>
          {itemList.map((e) => (
            <li className="sdds-navbar-menu__dropdown-item">
              <a className="sdds-navbar-menu__dropdown-item-link" href="/">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {collapse && showPopOver && (
        <div
          className={'sdds-navbar-menu-popover'}
          style={{ left: `${posX}px`, top: `${posY}px` }}
        >
          <div
            className="sdds-navbar-menu-item-dropdown"
            style={{ height: '100%' }}
          >
            <div className="sdds-navbar-menu-item-dropdown-parent">
              <a className="sdds-navbar-menu-item-link" href="/">
                <span className="sdds-menu-item-dropdown-text">{itemName}</span>
              </a>
            </div>
            <ul className="sdds-navbar-menu__dropdown-menu">
              {itemList &&
                itemList.map((e) => (
                  <li className="sdds-navbar-menu__dropdown-item">
                    <a
                      className="sdds-navbar-menu__dropdown-item-link"
                      href="/"
                    >
                      {e.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenuDropdownItem;
