import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './Info.scss';

function DetailInfo( {match} ) {
  switch(match.path) {
    default: return (
      <ul className="list-group">
        <li className="list-group-item">First</li>
        <li className="list-group-item">Second</li>
        <li className="list-group-item">Third</li>
      </ul>
    );
    case '/info/form': return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
    case '/info/table': return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Thomas</td>
          </tr>
          <tr>
            <td>2</td><td>Cook</td>
          </tr>
          <tr>
            <td>3</td><td>James</td>
          </tr>
          <tr>
            <td>4</td><td>Bay</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <div className="container-fluid">
          <h1>Info</h1>
          <h4>{this.props.match.params.id}</h4>
          <div className="col-md-4">
            <Switch>
              <Route path={'/info/'+this.props.match.params.id} component={DetailInfo} />
              <Redirect from="/info" to="/info/list" />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
