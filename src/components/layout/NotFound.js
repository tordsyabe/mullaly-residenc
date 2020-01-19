import React from 'react';
import { Grid, Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import notFound from '../../assets/not-found.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NotFound = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Container style={{ height: '100%' }}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ marginTop: '5rem' }}
        spacing={matches ? 5 : 3}>
        <Grid item style={{ width: matches ? '40%' : '100%' }}>
          <img src={notFound} alt='404 error' style={{ width: '100%' }} />
        </Grid>
        <Grid item style={{ textAlign: !matches ? 'center' : null }}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h4'>Opps! Page Not Found.</Typography>
          <Typography variant='subtitle1'>
            Sorry, the page you are looking for is not found.
          </Typography>
          <br />
          <br />
          <Button variant='contained' color='primary'>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              Go back to home page
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
