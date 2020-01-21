import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { AddBoarderContext } from '../../contexts/AddBoarderContext';

import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

export default function BottomNav() {
  const { handleClickOpenBoarderDialog } = useContext(AddBoarderContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction label='Boarders' icon={<PersonRoundedIcon />} />
      <BottomNavigationAction label='Bills' icon={<DescriptionRoundedIcon />} />
      <BottomNavigationAction
        label='Add Boarder'
        icon={<PersonAddRoundedIcon />}
        onClick={handleClickOpenBoarderDialog}
      />
    </BottomNavigation>
  );
}
