import React from "react";
import './App.css';
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
