import React, { useContext, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { HouseContext } from "../../contexts/HouseContext";
import {
  FormControl,
  Select,
  MenuItem,
  Grid,
  Tooltip
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BoarderContext } from "../../contexts/BoarderContext";

// import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

// import PropTypes from 'prop-types';

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0
//   });
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
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
      {/* <ElevationScroll {...props}> */}
      <AppBar elevation={4}>
        <Toolbar>
          <Grid container justify='space-between'>
            <Grid item>
              <Grid container alignItems='center'>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <MenuIcon />
                </IconButton>
                <FormControl style={{ width: "200px", color: "#ffffff" }}>
                  <Select
                    id='select-house'
                    value={selectedHouse}
                    onChange={handleChange}
                    disableUnderline
                    style={{ color: "white" }}
                  >
                    {houses.map(house => (
                      <MenuItem key={house.id} value={house.id}>
                        {house.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <Link
                to='/'
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                <Tooltip title='Go back home' placement='bottom'>
                  <IconButton color='inherit'>
                    <HomeRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* </ElevationScroll> */}
    </Fragment>
  );
};

export default Header;
