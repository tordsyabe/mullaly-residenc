import React from "react";

import { BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import HouseContextProvider from "./contexts/HouseContext";
import BoarderContextProvider from "./contexts/BoarderContext";
import Routes from "./Routes";
import AuthContextProvider from "./contexts/AuthContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },

    secondary: {
      main: "#d50000"
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <AuthContextProvider>
          <HouseContextProvider>
            <BoarderContextProvider>
              <Routes />
            </BoarderContextProvider>
          </HouseContextProvider>
        </AuthContextProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
