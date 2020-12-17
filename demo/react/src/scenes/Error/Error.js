import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid">
          <h1>Not found</h1>
          <p>The link you tried to reach does not exist.</p>
        </div>
      </section>
    );
  }
}

export default Error;
