import React, { createContext, useEffect, useState } from 'react';

import firebase from '../firebase';

export const BoarderContext = createContext();

const BoarderContextProvider = props => {
  const [boarders, setBoarders] = useState([]);
  const [isBoardersEmpty, setIsBoardersEmpty] = useState(true);

  const [selectedHouse, setSelectedHouse] = useState('prXVJsQpDcp43bC7xTf5');

  const [house, setHouse] = useState({});

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('boarders')
      .where('house', '==', firebase.firestore().doc(`houses/${selectedHouse}`))
      .onSnapshot(
        snapShot => {
          const newBoarders = snapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBoarders(newBoarders);
          setIsBoardersEmpty(false);
        },
        error => console.log(error)
      );

    return () => unsubscribe();
  }, [selectedHouse]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('houses')
      .doc(selectedHouse)
      .get()
      .then(doc => {
        const newHouse = {
          id: doc.id,
          ...doc.data()
        };
        setHouse(newHouse);
      });
  }, [selectedHouse]);

  return (
    <BoarderContext.Provider
      value={{
        boarders,
        setBoarders,
        isBoardersEmpty,
        setIsBoardersEmpty,
        setSelectedHouse,
        selectedHouse,
        house
      }}>
      {props.children}
    </BoarderContext.Provider>
  );
};

export default BoarderContextProvider;
