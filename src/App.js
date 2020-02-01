import React from "react";

import { BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
          <Routes />
        </AuthContextProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
