import React, { useContext, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { HouseContext } from '../../contexts/HouseContext';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { BoarderContext } from '../../contexts/BoarderContext';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// import PropTypes from 'prop-types';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func
// };

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

  const { houses } = useContext(HouseContext);
  const { setSelectedHouse, selectedHouse } = useContext(BoarderContext);

  const handleChange = event => {
    setSelectedHouse(event.target.value);
  };
  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar color='primary'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <FormControl style={{ width: '200px', color: '#ffffff' }}>
              <Select
                id='select-house'
                value={selectedHouse}
                onChange={handleChange}
                disableUnderline
                style={{ color: 'white' }}>
                {houses.map(house => (
                  <MenuItem key={house.id} value={house.id}>
                    {house.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};

export default Header;
