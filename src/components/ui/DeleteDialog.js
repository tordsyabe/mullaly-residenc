import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';

import firebase from '../../firebase';

const DeleteDialog = ({ open, handleClose, toDelete, boarder }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    const newDues = [...boarder.dues];

    const updatedDues = newDues.filter(
      due => due.datePaid.seconds !== toDelete.datePaid.seconds
    );

    setIsDeleting(true);

    firebase
      .firestore()
      .collection('boarders')
      .doc(boarder.id)
      .update({
        dues: updatedDues
      })
      .then(() => {
        handleClose();
        setIsDeleting(false);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>Delete payment</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure that you want to delete this payment?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleDelete} color='primary' disabled={isDeleting}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
