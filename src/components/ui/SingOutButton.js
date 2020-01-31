import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import firebase from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const SingOutButton = props => {
  const { setIsAuthenticated, setIsLoading } = useContext(AuthContext);

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
