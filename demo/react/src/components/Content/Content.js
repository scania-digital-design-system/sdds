import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Error from '../../scenes/Error/Error';

class Content extends Component {
  render() {
    return (
      <c-content>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {this.props.items.children.map((item, key) => [
            <Route component={item.ctrl} key={key} path={item.url} exact />,
            <Route component={item.ctrl} key={key} path={item.url +'/:id'} />
          ])}
          <Route component={Error} />
        </Switch>
      </c-content>
    );
  }
}

export default Content;