import React, { Fragment, useContext } from 'react';
import { Typography, Fade } from '@material-ui/core';
import Boarders from './Boarders';
import { BoarderContext } from '../contexts/BoarderContext';

const House = props => {
  const { house } = useContext(BoarderContext);
  return (
    <Fragment>
      <div style={{ marginBottom: '1rem' }}>
        <Typography variant='h5'>{house.name}</Typography>

        <Typography variant='caption'>{house.address}</Typography>
      </div>
      <Boarders />
    </Fragment>
  );
};

export default House;
