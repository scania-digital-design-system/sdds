import "babel-polyfill";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import data from '../package.json';
import './index.scss';

// Scenes
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

// Components
import Home from './scenes/Home/Home';
import Info from './scenes/Info/Info';

import * as serviceWorker from './serviceWorker';

import { addTheme, defineCustomElements } from '@scania-sdds/components'
import { theme as scania } from '@scania-sdds/theme-light';

defineCustomElements();
addTheme(scania);


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { ITEMS: { children: [] } }
  }

  componentDidMount() {
    this.setState({
      ITEMS: {
        url: '/',
        children: [
          {
            name: 'Home', url: '/home', ctrl: Home, type : 'primary'
          },
          {
            name: 'Info', url: '/info', ctrl: Info, type : 'primary',
            children: [
              { name: 'List', url: '/list', ctrl: Info, type : 'primary' },
              { name: 'Table', url: '/table', ctrl: Info, type : 'primary' },
              { name: 'Form', url: '/form', ctrl: Info, type : 'primary' }
            ]
          },
        ]
      }
    })
  }

  render () {
    return (
    <Router basename={data.name}>
      <c-theme name="scania" global="true"></c-theme>
      <Header items={this.state.ITEMS} />
      <Content items={this.state.ITEMS} />
      <Footer />
    </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
