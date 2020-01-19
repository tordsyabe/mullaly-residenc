import React, { useContext } from 'react';

import { Switch, Route } from 'react-router-dom';
import { HouseContext } from './contexts/HouseContext';
import Home from './components/layout/Home';
import House from './components/House';
import NotFound from './components/layout/NotFound';

const Routes = props => {
  const { houses } = useContext(HouseContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {houses.map(house => (
        <Route exact path={`/${house.id}`} component={House} />
      ))}

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
