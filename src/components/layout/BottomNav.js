import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";

import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 3
  }
});

export default function BottomNav() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        history.push(`/${newValue}`);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Boarders'
        icon={
          <Link to='/boarding-house' style={{ color: "inherit" }}>
            <PersonRoundedIcon />
          </Link>
        }
        value='boarding-house'
      />

      <BottomNavigationAction
        label='Bills'
        icon={
          <Link to='/boarding-house/bills' style={{ color: "inherit" }}>
            <DescriptionRoundedIcon />
          </Link>
        }
        value='boarding-house/bills'
      />

      <BottomNavigationAction
        label='Add Boarder'
        icon={
          <Link to='/boarding-house/add-boarder' style={{ color: "inherit" }}>
            <PersonAddRoundedIcon />
          </Link>
        }
        value='boarding-house/add-boarder'
      />
    </BottomNavigation>
  );
}
