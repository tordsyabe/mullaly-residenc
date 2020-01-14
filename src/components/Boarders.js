import React, { useContext, Fragment, useState } from 'react';

import Boarder from './Boarder';
import { BoarderContext } from '../contexts/BoarderContext';
import { Typography, Button, Fab, Grid } from '@material-ui/core';
import AddBoarderDialog from './ui/AddBoarderDialog';

import AddIcon from '@material-ui/icons/Add';

const Boarders = props => {
  const { boarders } = useContext(BoarderContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (boarders.length === 0) {
    return (
      <Fragment>
        <Typography>
          <br />
          No Borders Available.{' '}
          <Fab onClick={handleClickOpen} color='primary'>
            <AddIcon />
          </Fab>
          <AddBoarderDialog handleClose={handleClose} open={open} />
        </Typography>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        {boarders.map(boarder => (
          <Grid item xs={12} lg={4} md={6}>
            <Boarder key={boarder.id} boarder={boarder} />
          </Grid>
        ))}
      </Grid>
      <Fab
        onClick={handleClickOpen}
        color='primary'
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: '2'
        }}>
        <AddIcon />
      </Fab>
      <AddBoarderDialog handleClose={handleClose} open={open} />
    </Fragment>
  );
};

export default Boarders;
