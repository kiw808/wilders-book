import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wilders from "./components/Wilders";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Wilders} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
