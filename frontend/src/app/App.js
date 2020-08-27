import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

import Signin from "./signin/Signin";
import Register from "./register/Register"

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
      <Switch></Switch>
    </Router>
  );
}

export default App;
