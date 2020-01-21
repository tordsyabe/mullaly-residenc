import React, { Fragment } from 'react';
import { Grid, Container } from '@material-ui/core';
import ElectricBill from './ElectricBill';
import WaterBill from './WaterBill';

const HouseBills = props => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={6} sm={12} xl={6}>
          <ElectricBill />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} xl={6}>
          <WaterBill />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HouseBills;
