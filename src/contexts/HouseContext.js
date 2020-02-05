import React, { createContext, useState, useEffect } from "react";

import firebase from "../firebase";

export const HouseContext = createContext();

const HouseContextProvider = props => {
  const [houses, setHouses] = useState([]);
  const [isHousesEmpty, setIsHousesEmpty] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("houses")
      .onSnapshot(
        snapShot => {
          const newHouses = snapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setHouses(newHouses);
          setIsHousesEmpty(false);
        },
        error => console.log(error)
      );

    return () => unsubscribe();
  }, []);

  return (
    <HouseContext.Provider
      value={{ houses, setHouses, isHousesEmpty, setIsHousesEmpty }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
