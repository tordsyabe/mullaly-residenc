import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import logo from "../../assets/logo.png";
import { Grid } from "@material-ui/core";
import SingOutButton from "../ui/SingOutButton";

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

export default function HomeHeader(props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container justify='space-between'>
              <Grid item style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  width='45px'
                  alt='logo'
                  style={{ marginRight: "0.6rem" }}
                />
                <Typography variant='h6'>Mullaly Residence</Typography>
              </Grid>
              <Grid item>
                <SingOutButton />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
