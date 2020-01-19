import React from 'react';

import Header from './components/layout/Header';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import House from './components/House';
import HouseContextProvider from './contexts/HouseContext';
import BoarderContextProvider from './contexts/BoarderContext';
import Home from './components/layout/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },

    secondary: {
      main: '#fafafa'
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <HouseContextProvider>
          <BoarderContextProvider>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={House} />
              </Switch>
            </div>
          </BoarderContextProvider>
        </HouseContextProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
