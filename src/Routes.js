import React, { useContext, Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';
import { HouseContext } from './contexts/HouseContext';
import Home from './components/layout/Home';
import House from './components/House';
import NotFound from './components/layout/NotFound';

const Routes = props => {
  const { houses } = useContext(HouseContext);

  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        {houses.map(house => (
          <Route
            key={house.id}
            exact
            path={`/${house.name}`}
            component={House}
          />
        ))}

        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
