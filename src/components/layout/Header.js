import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        elevation={0}
        color='secondary'
        style={{ background: '#ffffff' }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
