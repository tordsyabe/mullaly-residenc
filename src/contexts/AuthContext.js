import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "../firebase";

import { withRouter } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkUserStatus();
  });

  const checkUserStatus = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      setIsLoading(false);
      if (user) {
        setCurrentUser(user);
        // setIsAuthenticated(true);
      }

      if (user === null) {
        setCurrentUser(null);
        // setIsAuthenticated(false);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        setIsLoading
        // isAuthenticated,
        // setIsAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthContextProvider);
