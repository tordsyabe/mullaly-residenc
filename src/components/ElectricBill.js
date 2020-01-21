import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grow,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Collapse,
  IconButton
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
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
  }
}));

const ElectricBill = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <Fragment>
      <Grow in={true} timeout={500}>
        <Card className={classes.card} elevation={2}>
          <CardContent>
            <Grid container justify='space-between'>
              <Grid item>
                <Typography variant='h5'>Electric Bill</Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </CardContent>
          <CardActions style={{ position: 'relative' }}>
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
              <Typography variant='h6'>Payment History</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grow>
    </Fragment>
  );
};

export default ElectricBill;
