import './Header.css';

const Header = ({ onDrawerClick, expand }) => {
  return (
    <nav class="sdds-nav">
      <div class="sdds-nav__left">
        <div className="sdds-nav__overlay" />
        <button
          className={`sdds-nav__mob-menu-btn ${expand ? 'expanded' : null}`}
          onClick={onDrawerClick}
        >
          <div id="sdds-nav__mob-menu-icon">
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-1"
            />
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-2"
            />
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-3"
            />
          </div>
        </button>
        <div className="sdds-nav__app-name">SDDS DEMO REACT</div>
      </div>
      <div className="sdds-nav__right">
        <a className="sdds-nav__item sdds-nav__app-logo" href="#" />
      </div>
    </nav>
  );
};

export default Header;
