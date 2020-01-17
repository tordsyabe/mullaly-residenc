import React, { useContext } from 'react';

import Header from './components/layout/Header';
import { Container } from '@material-ui/core';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BoarderContext } from './contexts/BoarderContext';

import { FormControl, Select, MenuItem } from '@material-ui/core';
import House from './components/House';
import { HouseContext } from './contexts/HouseContext';

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
  const { houses } = useContext(HouseContext);
  const { setSelectedHouse, selectedHouse } = useContext(BoarderContext);

  const handleChange = event => {
    setSelectedHouse(event.target.value);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Header>
        <FormControl style={{ width: '200px' }}>
          <Select
            id='select-house'
            value={selectedHouse}
            onChange={handleChange}
            disableUnderline>
            {houses.map(house => (
              <MenuItem key={house.id} value={house.id}>
                {house.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Header>
      <Container style={{ margin: '1rem 0' }}>
        <House />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
