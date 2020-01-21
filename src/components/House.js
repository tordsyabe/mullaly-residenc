import React, { Fragment, useContext } from 'react';
import {
  Typography,
  Fade,
  Container,
  CircularProgress
} from '@material-ui/core';
import Boarders from './Boarders';
import { BoarderContext } from '../contexts/BoarderContext';
import Header from './layout/Header';
import BottomNav from './layout/BottomNav';
import AddBoarderContextProvider from '../contexts/AddBoarderContext';
import HouseBills from './HouseBills';

import { Route, Switch, useLocation, useParams } from 'react-router-dom';

const House = props => {
  const { house, isBoardersEmpty } = useContext(BoarderContext);
  const location = useLocation();

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
            marginBottom: '1rem',
            backgroundColor: '#1976d2',
            padding: '1rem 0',
            color: '#ffffff',
            height: '250px'
          }}>
          <Container style={{ marginTop: '4rem' }}>
            <Typography variant='h4'>
              {location.pathname === '/boarding-house'
                ? 'Boarders'
                : 'House Bills'}
            </Typography>
            <br />
            <Typography variant='caption'>{house.address}</Typography>
          </Container>
        </div>
      </Fade>
      <AddBoarderContextProvider>
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
            </Switch>
          </Container>
        </div>
        <BottomNav />
      </AddBoarderContextProvider>
    </Fragment>
  );
};

export default House;
