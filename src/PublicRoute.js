import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { currentUser, isLoading } = useContext(AuthContext);
  const history = useHistory();

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props => {
        if (isLoading) {
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

        return !!currentUser && restricted ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
