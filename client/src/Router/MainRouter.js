import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Main;
