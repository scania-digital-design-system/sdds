import readme from './readme.md';

export default {
  title: 'Patterns/Footer',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
  },
};

const Template = ({ topPart = false }) => `
  <style>
  .sb-show-main.sb-main-padded {
    padding: 0;
    margin: 0;
  }
  </style>

  <div class="sdds-footer">
    ${
      topPart
        ? `
      <div class="sdds-footer-top sdds-container-fluid">
        <div class="sdds-row">
          <div class="sdds-footer-top-col sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div class="sdds-footer-title opened">
              <span>Title 1</span>
              <span class="sdds-footer-top-icon">
                <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
                </svg>
              </span>
            </div>
            <ul class="sdds-footer-main-links opened">
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
            </ul>
          </div>

          <div class="sdds-col-max sdds-col-xxlg sdds-col-xlg sdds-col-lg sdds-col-md-12 sdds-col-sm-12 sdds-col-xs-12">
            <div class="sdds-footer-title">
              <span>Title 2</span>
              <span class="sdds-footer-top-icon">
                <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
                </svg>
              </span>
            </div>
            <ul class="sdds-footer-main-links">
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
              <li><a href="#">Legal link</a></li>
            </ul>
          </div>

          
          
        </div>
      </div>
      `
        : ''
    }
    <div class="sdds-footer-main">
      <ul class="sdds-footer-main-links">
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
        <li><a href="#">Legal link</a></li>
      </ul>
      <ul class="sdds-footer-social-links">
        <li><a href="#">Social 1</a></li>
        <li><a href="#">Social 1</a></li>
        <li><a href="#">Social 1</a></li>
      </ul>
      <div class="sdds-footer-main-brand">
        <p>Copyright &copy; 2022 Scania</p>
      </div>
    </div>
  </div>
  `;

export const Basic = Template.bind({});
export const TopPart = Template.bind({});
TopPart.args = {
  topPart: true,
};
