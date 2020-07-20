import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
