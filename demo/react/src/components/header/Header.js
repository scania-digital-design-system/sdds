import {
  NavLink
} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="sdds-navbar">
      <div className="sdds-navbar-overlay "></div>
      <button id="menu-mobile" className="sdds-navbar-icon-button sdds-navbar-side-menu-drawer">
          <span className="sdds-icon-drawer"></span>
      </button>
      <div className="sdds-navbar-application-brand">My Application</div>
      <div id="side-menu" className="sdds-navbar-collapsible">
        <ul className="sdds-navbar-menu-list">
          <NavLink className="sdds-navbar-menu-item" exact to="/" activeClassName="active">
            <span className="sdds-navbar-menu-item-link">Home</span>
          </NavLink>
          <NavLink className="sdds-navbar-menu-item" to="/form" activeClassName="active">
            <span className="sdds-navbar-menu-item-link">Form</span>
          </NavLink>
         </ul>
      </div>
      <div className="sdds-navbar-scania-brand"></div>
    </nav>
  );
}

export default Header;