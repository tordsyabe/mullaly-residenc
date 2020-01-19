import React, { Fragment, useContext } from 'react';
import HomeHeader from './HomeHeader';

import AddIcon from '@material-ui/icons/Add';

import residence from '../../assets/residence.svg';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid
} from '@material-ui/core';
import { HouseContext } from '../../contexts/HouseContext';

const Home = props => {
  const { houses } = useContext(HouseContext);

  return (
    <Fragment>
      <HomeHeader />
      <div
        style={{
          width: '100%',
          height: '250px',
          position: 'relative',
          backgroundColor: '#1976d2'
        }}>
        <img
          src={residence}
          style={{
            objectFit: 'fill',
            position: 'absolute',
            width: '50%',
            height: '100%',
            right: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '8rem',
            width: '100%'
          }}>
          <Container maxWidth='md'>
            <Typography
              style={{ color: '#ffffff', marginBottom: '1rem' }}
              variant='h5'>
              Select Boarding house
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Card style={{ width: '100%', height: '208px' }}>
                  <CardContent
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                    <AddIcon fontSize='large' color='primary' />
                    <br />
                    <Typography color='primary' variant='subtitle2'>
                      Add Boarding house
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {houses.map(house => (
                <Grid item xs={12} md={4} lg={4} key={house.id}>
                  <Card style={{ width: '100%', height: '208px' }}>
                    <CardContent
                      style={{
                        padding: '1.2rem'
                      }}>
                      <Typography variant='h6'>{house.name}</Typography>
                      <Typography variant='caption'>
                        Available Room: 2
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
