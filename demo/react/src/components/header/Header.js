import './Header.css';

const Header = ({ onDrawerClick, expand }) => {
  return (
    <nav className="sdds-navbar">
      <button
        className={`sdds-navbar-icon-button sdds-navbar-side-menu-drawer ${
          expand ? 'expanded' : null
        }`}
        onClick={onDrawerClick}
      >
        <span className="sdds-icon-drawer" />
      </button>
      <div className="sdds-navbar-application-brand">SDDS DEMO REACT</div>
      <div className="sdds-navbar-scania-brand" />
    </nav>
  );
};

export default Header;
