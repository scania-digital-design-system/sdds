import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header/Header';
import Form  from './components/form/Form';
import Home from './components/home/Home';

function App() {
  return (    
    <Router>
    <div className="App">
      <sdds-theme></sdds-theme>
      <Header />
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
    </div>
    </Router>
  );
}

export default App;