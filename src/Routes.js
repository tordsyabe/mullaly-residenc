import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
import NotFound from "./components/layout/NotFound";
import House from "./components/pages/House";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import PrivateRoute from "./PrivateRoute";

const Routes = props => {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path={`/boarding-house`} component={House} />
        <Route exact path='/login' component={SignIn} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
