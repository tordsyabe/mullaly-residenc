import React, { useContext, Fragment, useState } from 'react';

import Boarder from './Boarder';
import { BoarderContext } from '../contexts/BoarderContext';
import { Typography, Fab, Grid, CircularProgress } from '@material-ui/core';
import AddBoarderDialog from './ui/AddBoarderDialog';

import AddIcon from '@material-ui/icons/Add';

const Boarders = props => {
  const { boarders, isBoardersEmpty } = useContext(BoarderContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isBoardersEmpty) {
    return (
      <Grid
        container
        justify='center'
        alignContent='center'
        style={{
          marginTop: '20%'
        }}>
        <CircularProgress />
      </Grid>
    );
  }

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
          <Grid key={boarder.id} item xs={12} lg={4} md={6}>
            <Boarder boarder={boarder} />
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
