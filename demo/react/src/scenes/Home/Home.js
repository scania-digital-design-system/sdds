import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sdds-container mt-5">
        <div className="sdds-row">
          <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
            <h3 className="mt-5">Visit Scania Digital Design System at <a target='_blank' href='https://digitaldesign.scania.com'>digitaldesign.scania.com</a><c-icon name='scania-external_link'></c-icon></h3>
            <p className="mt-5">Developing in our design system visit our <a target='_blank' href='https://github.com/scania/corporate-ui'>github</a><c-icon name='scania-external_link'></c-icon></p>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
