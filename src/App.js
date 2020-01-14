import React from 'react';

import Header from './components/layout/Header';
import { Typography, Container } from '@material-ui/core';
import Boarders from './components/Boarders';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BoarderContextProvider from './contexts/BoarderContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },

    secondary: {
      main: '#212121'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BoarderContextProvider>
        <Header />
        <Container style={{ margin: '1rem 0' }}>
          <Typography variant='h5'>Lopez Jaena House</Typography>
          <Typography variant='caption'>
            Lopez Jaena St, Bacolod City
          </Typography>

          <Boarders />
        </Container>
      </BoarderContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
