import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HouseContextProvider from './contexts/HouseContext';
import BoarderContextProvider from './contexts/BoarderContext';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },

    secondary: {
      main: '#d50000'
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <HouseContextProvider>
          <BoarderContextProvider>
            <Routes />
          </BoarderContextProvider>
        </HouseContextProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
