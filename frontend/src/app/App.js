import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Navbar from "./features/navbar/Navbar";

import Signin from "./features/signin/Signin";
import Register from "./features/register/Register";

import { AppContainer, AuthSection } from "./appStyle";

function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/signin">
            <AuthSection>
              <Signin />
            </AuthSection>
          </Route>
          <Route path="/register">
            <AuthSection>
              <Register />
            </AuthSection>
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </AppContainer>
      <Switch></Switch>
    </Router>
  );
}

export default App;
