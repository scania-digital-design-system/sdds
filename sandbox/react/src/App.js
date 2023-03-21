import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import DataTable from './components/dataTable/dataTable';

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <div id="root" className="App">
      <Router>
        <sdds-theme />
        <div className={`sdds-navbar-overlay ${expand ? 'expanded' : null}`} />
        <Header onDrawerClick={() => setExpand(!expand)} expand={expand} />
        <div className="sdds-demo-container">
          <div>
            <div className="sdds-container-fluid content-wrapper">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/form">
                  <Form />
                </Route>
                <Route path="/data-table">
                  <DataTable />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
