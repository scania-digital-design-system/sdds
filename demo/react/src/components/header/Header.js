import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="sdds-header">
        <span className="scania-symbol"></span>
      </div>

      <div className="sdds-content-header">
        <div className="sdds-container-fluid">
          <div className="sdds-row">
            <div className="sdds-col-xlg-16 sdds-col-md-8 sdds-col-sm-4 header-greeting-wrapper">

              <span className="header-greeting sdds-headline-02">Welcome to</span>
              <span className="page-title sdds-headline-02">React Demo</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;