import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser, isAuthenticated, isLoading } = useContext(AuthContext);

  return (
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

        return !!currentUser ? <Redirect to='/' /> : <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
