import './Footer.css';

const Footer = () => {
  return (
    <div className="sdds-footer">
      <div className="sdds-footer-top sdds-container-fluid">
        <div className="sdds-row">
          <div className="sdds-footer-top-col sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div className="sdds-footer-title opened">
              <span>Title 1</span>
              <span className="sdds-footer-top-icon">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <ul className="sdds-footer-main-links opened">
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
            </ul>
          </div>

          <div className="sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div className="sdds-footer-title">
              <span>Title 2</span>
              <span className="sdds-footer-top-icon">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <ul className="sdds-footer-main-links">
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
              <li>
                <a href="#">Legal link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sdds-footer-main">
        <ul className="sdds-footer-main-links">
          <li>
            <a href="#">Legal link</a>
          </li>
          <li>
            <a href="#">Legal link</a>
          </li>
          <li>
            <a href="#">Legal link</a>
          </li>
        </ul>
        <ul className="sdds-footer-social-links">
          <li>
            <a href="#">Social 1</a>
          </li>
          <li>
            <a href="#">Social 1</a>
          </li>
          <li>
            <a href="#">Social 1</a>
          </li>
        </ul>
        <div className="sdds-footer-main-brand">
          <p>Copyright &copy; 2022 Scania</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
