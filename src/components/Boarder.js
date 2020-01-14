import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip, Divider, Grid } from '@material-ui/core';

import PreviousMonth from './PreviousMonth';
// import CurrentMonth from './CurrentMonth';
import { formatDate } from '../utils/Utils';
import PaymentDialog from './ui/PaymentDialog';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginTop: '1rem',
    paddingBottom: '0.6rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Boarder = ({ boarder }) => {
  const classes = useStyles();

  const totalRent = boarder.roomRate + boarder.utilities;

  const dateJoined = formatDate(new Date(boarder.dateJoined.seconds * 1000));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5'>{boarder.name}</Typography>
          <Typography variant='body2'>
            Room rate:{' '}
            {boarder.roomRate.toLocaleString(undefined, {
              minimumFractionDigits: 2
            })}{' '}
            +{' '}
            {boarder.utilities.toLocaleString(undefined, {
              minimumFractionDigits: 2
            }) + ' (utilities)'}
          </Typography>
          <Typography variant='h6'>
            {totalRent.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            <span style={{ fontSize: '12px' }}>/month</span>
          </Typography>
          <Typography variant='caption'>Date Joined: {dateJoined}</Typography>
          <br />
          <br />
          <Divider />
          <br />

          <Typography variant='h6'>Due Date</Typography>
          <br />
          <PreviousMonth boarder={boarder} />
          <br />
        </CardContent>
        <CardActions style={{ position: 'relative' }}>
          {/* <Button size='small'>More Details</Button> */}
          <Button
            size='small'
            variant='contained'
            color='primary'
            onClick={handleClickOpen}>
            Make Payment
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
            style={{ position: 'absolute', right: '1rem' }}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='h6'>Contact Details</Typography>
            <Typography variant='body2'>
              Permanent Addess: {boarder.permanentAddress}
            </Typography>
            <Typography variant='body2'>
              Mobile Number: {boarder.mobileNumber}
            </Typography>
            <Typography variant='body2'>Email: {boarder.email}</Typography>
            <br />

            <Divider />
            <br />
            <Typography variant='h6'>Boarder Info</Typography>
            <Typography variant='body2'>
              Deposit:{' '}
              {boarder.deposit.toLocaleString(undefined, {
                minimumFractionDigits: 2
              })}
            </Typography>
            <Typography variant='body2'>
              Room Number: {boarder.roomNumber}
            </Typography>
            <Typography variant='body2'>
              Type of Rent: {boarder.typeOfRent}
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography variant='h6'>Payment History</Typography>
            {boarder.dues.map(due => (
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant='body2'>
                    {formatDate(new Date(due.datePaid.seconds * 1000))}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body2'>
                    {due.amountPaid.toLocaleString(undefined, {
                      minimumFractionDigits: 2
                    })}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Collapse>
      </Card>
      <PaymentDialog open={open} handleClose={handleClose} boarder={boarder} />
    </Fragment>
  );
};

export default Boarder;
