import React, { Fragment } from 'react';

import { Grid, Chip, Typography } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';

import { formatDate } from '../utils/Utils';

const PreviousMonth = ({ boarder }) => {
  const boarderDues = boarder.dues.slice(-1)[0];
  const dueDate = formatDate(new Date(boarderDues.dueDate.seconds * 1000));
  const datePaid = formatDate(new Date(boarderDues.datePaid.seconds * 1000));

  const duePayment = boarderDues.outstanding + boarderDues.balance;

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant='body1'>{dueDate}</Typography>
          <br />

          <Typography variant='body2'>
            Last payment:{' '}
            {boarderDues.amountPaid.toLocaleString(undefined, {
              minimumFractionDigits: 2
            })}
          </Typography>
          {/* <Typography variant='body2'>
            Utilities: {boarderDues.isUtilitiesPaid ? 'Paid' : 'Not Paid'}
          </Typography> */}
        </Grid>
        <Grid item xs={6} style={gridStyle}>
          <Chip
            label={
              boarderDues.isPartiallyPaid ? 'Partially Paid' : 'Fully Paid'
            }
            avatar={
              <Avatar
                style={{
                  background: 'green',
                  width: 'auto',
                  fontSize: '11px',
                  padding: '3px 4px',
                  borderRadius: '50% 0 0 50%',
                  borderRight: '1px solid #4c964c'
                }}>
                Bal:{' '}
                {boarderDues.balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </Avatar>
            }
            onClick={() => {}}
            // onDelete={() => {}}
            // deleteIcon={ <DoneIcon />}
            color='primary'
            style={{ background: 'green' }}
          />
          <Typography variant='caption' style={{ marginTop: '0.4rem' }}>
            <Chip
              label={`Date Paid: ${datePaid}`}
              size='small'
              style={{ fontSize: '10px' }}
            />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>
            Due Payment:{' '}
            {duePayment.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            <br />
            <Typography variant='caption'>
              Due payment: (room rate + utitilities + balance){' '}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export default PreviousMonth;
