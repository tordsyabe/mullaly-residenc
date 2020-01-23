import React, { Fragment, useContext } from 'react';
import {
  Typography,
  Fade,
  Container,
  CircularProgress
} from '@material-ui/core';
import Boarders from '../Boarders';
import { BoarderContext } from '../../contexts/BoarderContext';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import HouseBills from '../HouseBills';

import { Route, Switch, useLocation } from 'react-router-dom';
import AddBoarder from '../AddBoarder';
import NotFound from '../layout/NotFound';

import bg from '../../assets/bg.png';

const House = props => {
  const { house, isBoardersEmpty } = useContext(BoarderContext);
  const location = useLocation();

  const headerTitle = location => {
    switch (location.pathname) {
      case '/boarding-house':
        return 'Boarders';
      case '/boarding-house/bills':
        return 'House Bills';
      case '/boarding-house/add-boarder':
        return 'Add Boarder';
      default:
        return 'Boarders';
    }
  };

  if (isBoardersEmpty) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <Fade in={true} timeout={500}>
        <div
          style={{
            backgroundColor: '#1976d2',
            padding: '5rem 0',
            color: '#ffffff',
            height: '250px',
            background: `url(${bg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <Container>
            <Typography variant='h4'>{headerTitle(location)}</Typography>
            <br />
            <Typography variant='caption'>{house.address}</Typography>
          </Container>
        </div>
      </Fade>
      <div
        style={{
          position: 'absolute',
          top: '12rem',
          width: '100%',
          marginBottom: '4.5rem'
        }}>
        <Container maxWidth='lg'>
          <Switch>
            <Route exact path='/boarding-house' component={Boarders} />
            <Route
              exact
              path={`/boarding-house/bills`}
              component={HouseBills}
            />
            <Route
              exact
              path={`/boarding-house/add-boarder`}
              component={AddBoarder}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
      <BottomNav />
    </Fragment>
  );
};

export default House;
