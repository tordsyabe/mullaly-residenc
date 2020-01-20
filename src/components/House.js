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

const House = props => {
  const { house, isBoardersEmpty } = useContext(BoarderContext);

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
            <Typography variant='h4'>Boarders</Typography>
            <br />
            <Typography variant='caption'>{house.address}</Typography>
          </Container>
        </div>
      </Fade>
      <div style={{ position: 'absolute', top: '12rem', width: '100%' }}>
        <Container maxWidth='lg'>
          <Boarders />
        </Container>
      </div>
    </Fragment>
  );
};

export default House;
