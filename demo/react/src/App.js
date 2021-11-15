import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <div id="root" className="App">
      <Router>
        <sdds-theme />
        <div className="sdds-navbar-overlay expanded" />
        <Header />
        <div className="sdds-push sdds-demo-container">
          <SideMenu />
          <div className={'sdds-content-push'}>
            <div className="sdds-container-fluid content-wrapper">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/form">
                  <Form />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
