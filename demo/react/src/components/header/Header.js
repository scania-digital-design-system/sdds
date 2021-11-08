import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="sdds-navbar">
            <button className="sdds-navbar-icon-button sdds-navbar-side-menu-drawer expanded">
                <span className="sdds-icon-drawer"/>
            </button>
            <div className="sdds-navbar-application-brand">SDDS DEMO REACT</div>

            <div className="sdds-navbar-collapsible">
                <ul className="sdds-navbar-menu-list">
                    <NavLink className="sdds-navbar-menu-item"
                             exact to="/"
                             activeClassName="active">
                        <a className="sdds-navbar-menu-item-link">Home</a>
                    </NavLink>

                    <NavLink className="sdds-navbar-menu-item"
                             to="/form"
                             activeClassName="active">
                        <a className="sdds-navbar-menu-item-link">Form</a>
                    </NavLink>
                </ul>
            </div>
            <div className="sdds-navbar-scania-brand"/>
        </nav>
    );
};

export default Header;
