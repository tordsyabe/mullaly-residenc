import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';
import NotFound from './components/layout/NotFound';
import House from './components/pages/House';
import Home from './components/pages/Home';

const Routes = props => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path={`/boarding-house`} component={House} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
