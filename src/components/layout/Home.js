import React, { Fragment, useContext } from 'react';
import HomeHeader from './HomeHeader';

import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';

import residence from '../../assets/residence.svg';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Grow
} from '@material-ui/core';
import { HouseContext } from '../../contexts/HouseContext';
import { BoarderContext } from '../../contexts/BoarderContext';

const Home = props => {
  const { houses } = useContext(HouseContext);

  const { setSelectedHouse } = useContext(BoarderContext);

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
            <Grow in={true} timeout={500}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                  <Card
                    style={{
                      width: '100%',
                      height: '208px',
                      cursor: 'pointer'
                    }}>
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
                    <Link
                      to={`/${house.id}`}
                      style={{ textDecoration: 'none' }}>
                      <Card
                        onClick={() => setSelectedHouse(house.id)}
                        style={{
                          width: '100%',
                          height: '208px',
                          cursor: 'pointer'
                        }}>
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
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grow>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
