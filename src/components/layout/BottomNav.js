import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { AddBoarderContext } from '../../contexts/AddBoarderContext';

import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

import { Link } from 'react-router-dom';
import { BoarderContext } from '../../contexts/BoarderContext';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { house } = useContext(BoarderContext);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction
        label='Boarders'
        icon={
          <Link to='/boarding-house' style={{ color: 'inherit' }}>
            <PersonRoundedIcon />
          </Link>
        }
      />

      <BottomNavigationAction
        label='Bills'
        icon={
          <Link to='/boarding-house/bills' style={{ color: 'inherit' }}>
            <DescriptionRoundedIcon />
          </Link>
        }
      />

      <BottomNavigationAction
        label='Add Boarder'
        icon={
          <Link to='/boarding-house/add-boarder' style={{ color: 'inherit' }}>
            <PersonAddRoundedIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
