import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";
import BoarderContextProvider from "./contexts/BoarderContext";
import HouseContextProvider from "./contexts/HouseContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, isLoading } = useContext(AuthContext);

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
        return !!currentUser ? (
          <HouseContextProvider>
            <BoarderContextProvider>
              <Component {...props} />
            </BoarderContextProvider>
          </HouseContextProvider>
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default PrivateRoute;
