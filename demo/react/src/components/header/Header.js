import './Header.css';

const Header = () => {
    return (
        <nav className="sdds-navbar">
            <button className="sdds-navbar-icon-button sdds-navbar-side-menu-drawer expanded">
                <span className="sdds-icon-drawer"/>
            </button>
            <div className="sdds-navbar-application-brand">SDDS DEMO REACT</div>
            <div className="sdds-navbar-scania-brand"/>
        </nav>
    );
};

export default Header;
