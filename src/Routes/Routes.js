import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Container/Home";
import Profile from "../Container/Profile";
import Header from "../Container/Header";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Profile} />
        {/* <Route path="/details/:id" component={profile} /> */}
        {/* <Route path="/profile" component={Profile} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
