import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from "./pages/dashBoard";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <DashBoard/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
