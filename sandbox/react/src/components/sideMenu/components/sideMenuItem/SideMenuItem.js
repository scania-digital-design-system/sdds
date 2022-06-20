import React, { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { NavLink } from 'react-router-dom';

const SideMenuItem = ({ itemName, link, collapse }) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(0);
  const [active, setActive] = useState(false);

  function onHoverMenu(event) {
    setShowPopOver(!showPopOver);
    const elem = event.target;
    setPosX(elem.getBoundingClientRect().left + elem.offsetWidth + 2);
    setPosY(elem.getBoundingClientRect().top);
  }

  return (
    <>
      <NavLink
        className={`nav-link sdds-navbar-menu-item`}
        activeClassName={active ? 'active' : ''}
        to={link}
        style={{ color: 'black' }}
        onMouseEnter={(e) => onHoverMenu(e)}
        onMouseLeave={() => setShowPopOver(!showPopOver)}
      >
        <IconButton />
        <a className="sdds-navbar-menu-item-link" href={link}>
          {itemName}
        </a>
      </NavLink>
      {collapse && showPopOver && (
        <div
          className={'sdds-navbar-menu-popover'}
          style={{ left: `${posX}px`, top: `${posY}px`, fontWeight: 'bold' }}
        >
          <div className="sidebar-menu-popover">
            <a className="sdds-navbar-menu-item-link" href={link}>
              {itemName}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenuItem;
