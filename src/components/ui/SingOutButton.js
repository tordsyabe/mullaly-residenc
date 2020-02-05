import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import firebase from "../../firebase";

const SingOutButton = props => {
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Tooltip title='Logout' placement='bottom'>
      <IconButton color='inherit' onClick={handleSignOut}>
        <ExitToAppRoundedIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SingOutButton;
