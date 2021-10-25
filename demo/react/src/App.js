import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
    return (
        <div className="App">
            <Router>
                <sdds-theme></sdds-theme>
                <Header/>
                <div style={{display: 'flex'}}>
                    <SideMenu/>
                    <div>
                        <div className="sdds-container content-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/form">
                                    <Form/>
                                </Route>
                            </Switch>
                        </div>
                    <Footer/>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
