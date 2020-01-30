import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserAuthenticating, setIsUserAuthenticating] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsUserAuthenticating(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isUserAuthenticating }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
