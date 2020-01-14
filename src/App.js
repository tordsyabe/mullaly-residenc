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
      main: '#fafafa'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BoarderContextProvider>
        <Header />
        <Container style={{ margin: '1rem 0' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant='h5'>Lopez Jaena House</Typography>
            <Typography variant='caption'>
              Lopez Jaena St, Bacolod City
            </Typography>
          </div>
          <Boarders />
        </Container>
      </BoarderContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
