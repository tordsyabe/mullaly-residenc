import React, { createContext, useState } from 'react';

export const AddBoarderContext = createContext();

const AddBoarderContextProvider = props => {
  const [openAddBoarderDialog, setOpenAddBoarderDialog] = useState(false);

  const handleClickOpenBoarderDialog = () => {
    setOpenAddBoarderDialog(true);
  };

  const handleCloseBoarderDialog = () => {
    setOpenAddBoarderDialog(false);
  };

  return (
    <AddBoarderContext.Provider
      value={{
        openAddBoarderDialog,
        handleClickOpenBoarderDialog,
        handleCloseBoarderDialog
      }}>
      {props.children}
    </AddBoarderContext.Provider>
  );
};

export default AddBoarderContextProvider;
