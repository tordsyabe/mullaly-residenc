import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";

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
  const [value, setValue] = useState("boarding-house");

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
        icon={<PersonRoundedIcon />}
        value='boarding-house'
      />

      <BottomNavigationAction
        label='Bills'
        icon={<DescriptionRoundedIcon />}
        value='boarding-house/bills'
        disabled
      />

      <BottomNavigationAction
        label='Add'
        icon={<PersonAddRoundedIcon />}
        value='boarding-house/add-boarder'
      />

      <BottomNavigationAction
        label='Manage'
        icon={<AssignmentIndRoundedIcon />}
        value='boarding-house/manage-boarders'
      />
    </BottomNavigation>
  );
}
