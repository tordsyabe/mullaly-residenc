import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HouseContextProvider from './contexts/HouseContext';
import BoarderContextProvider from './contexts/BoarderContext';

ReactDOM.render(
  <HouseContextProvider>
    <BoarderContextProvider>
      <App />
    </BoarderContextProvider>
  </HouseContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
