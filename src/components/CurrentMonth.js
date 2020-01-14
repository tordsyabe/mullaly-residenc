import React, { Fragment, useState } from 'react';

import { Grid, Chip, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import PaymentDialog from './ui/PaymentDialog';
import { formatDate } from '../utils/Utils';

const CurrentMonth = ({ boarderDues }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dueDate = formatDate(new Date(boarderDues.dueDate.seconds * 1000));

  return (
    <Fragment>
      <Typography variant='subtitle2'>Current month</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <br />
          <Typography variant='body2'>{dueDate}</Typography>

          <Typography variant='body2'>
            Outstanding:{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {boarderDues}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6} style={gridStyle}>
          <Chip
            label='Make Payment'
            onClick={handleClickOpen}
            deleteIcon={<DoneIcon />}
            color='primary'
          />
          <Typography variant='body2'></Typography>
        </Grid>
      </Grid>

      <PaymentDialog open={open} handleClose={handleClose} />
    </Fragment>
  );
};

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export default CurrentMonth;
