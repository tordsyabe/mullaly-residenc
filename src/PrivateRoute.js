import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, isUserAuthenticating } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (isUserAuthenticating) {
          return (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CircularProgress />
            </div>
          );
        }

        if (!currentUser) {
          return <Redirect to={{ pathname: "/login" }} />;
        }

        if (!!currentUser) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
