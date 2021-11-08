import React, { useState } from 'react';
import IconButton from '../IconButton/IconButton';

const SideMenuItem = ({ itemName, collapse }) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(0);

  function onHoverMenu(event) {
    setShowPopOver(!showPopOver);
    const elem = event.target;
    setPosX(elem.getBoundingClientRect().left + elem.offsetWidth + 2);
    setPosY(elem.getBoundingClientRect().top);
  }

  return (
    <>
      {collapse && showPopOver && (
        <div
          className={'sdds-navbar-menu-popover'}
          style={{
            display: 'block',
            position: 'fixed',
            left: `${posX}px`,
            top: `${posY}px`,
            zIndex: 100,
          }}
        >
          <li
            className="sdds-navbar-menu-item"
            style={{
              display: 'flex',
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="sdds-navbar-menu-item-link" href="#">
              {itemName}
            </a>
          </li>
        </div>
      )}
      <li
        className={`sdds-navbar-menu-item`}
        onClick={() => console.log('side menu item without dropdown')}
        onMouseEnter={(e) => onHoverMenu(e)}
        onMouseLeave={() => setShowPopOver(!showPopOver)}
      >
        <IconButton />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="sdds-navbar-menu-item-link" href="">
          {itemName}
        </a>
      </li>
    </>
  );
};

export default SideMenuItem;
