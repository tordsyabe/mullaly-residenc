import React, { createContext, useEffect, useState } from 'react';

import firebase from '../firebase';

export const BoarderContext = createContext();

const BoarderContextProvider = props => {
  const [boarders, setBoarders] = useState([]);
  const [isBoardersEmpty, setIsBoardersEmpty] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('boarders')
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
  }, []);

  return (
    <BoarderContext.Provider
      value={{ boarders, setBoarders, isBoardersEmpty, setIsBoardersEmpty }}>
      {props.children}
    </BoarderContext.Provider>
  );
};

export default BoarderContextProvider;
