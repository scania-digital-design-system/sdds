import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onDrawerClick, expand }) => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <nav class="sdds-nav sdds-u-fixed sdds-u-top0">
      <div class="sdds-nav__left">
        <div className="sdds-nav__overlay" />
        <button
          className={`sdds-nav__mob-menu-btn ${expand ? 'expanded' : null}`}
          onClick={onDrawerClick}
        >
          <div id="sdds-nav__mob-menu-icon">
            <span className="sdds-nav__mob-menu-icon-line" id="sdds-nav__mob-menu-icon-line-1" />
            <span className="sdds-nav__mob-menu-icon-line" id="sdds-nav__mob-menu-icon-line-2" />
            <span className="sdds-nav__mob-menu-icon-line" id="sdds-nav__mob-menu-icon-line-3" />
          </div>
        </button>
        <div className="sdds-nav__app-name">SDDS DEMO REACT</div>
      </div>

      <div className="sdds-nav__center">
        <ul className="sdds-nav__inline-menu">
          <li
            className={
              splitLocation[1] === '' ? 'sdds-nav__item sdds-nav__item--active' : 'sdds-nav__item'
            }
          >
            <Link className="sdds-nav__item-core" to="/">
              <p className="sdds-nav__item-core-text">Home</p>
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === 'form'
                ? 'sdds-nav__item sdds-nav__item--active'
                : 'sdds-nav__item'
            }
          >
            <Link className="sdds-nav__item-core" to="/form">
              <p className="sdds-nav__item-core-text">Form</p>
            </Link>
          </li>

          <li
            className={
              splitLocation[1] === 'data-table'
                ? 'sdds-nav__item sdds-nav__item--active'
                : 'sdds-nav__item'
            }
          >
            <Link className="sdds-nav__item-core" to="/data-table">
              <p className="sdds-nav__item-core-text">Data Table</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sdds-nav__right">
        <a className="sdds-nav__item sdds-nav__app-logo" href="https://www.scania.com" />
      </div>
    </nav>
  );
};

export default Header;
