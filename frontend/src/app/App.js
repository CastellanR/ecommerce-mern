import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./signin/Signin";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar"
import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">       
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
