import React, { Fragment, useContext } from 'react';
import { Typography, Fade } from '@material-ui/core';
import Boarders from './Boarders';
import { BoarderContext } from '../contexts/BoarderContext';

const House = props => {
  const { house } = useContext(BoarderContext);
  return (
    <Fragment>
      <Fade in={true} timeout={500}>
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant='h4'>Boarders</Typography>
          <br />
          <Typography variant='subtitle1'>{house.address}</Typography>
        </div>
      </Fade>
      <Boarders />
    </Fragment>
  );
};

export default House;
