import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Link } from 'react-router-dom';

export default function AddBoarderDialogSuccess({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Boarder Saved</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Boarder information saved, check the new boarder on the boarders
            page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='primary' autoFocus onClick={handleClose}>
            <Link
              to='/boarding-house'
              style={{ color: 'inherit', textDecoration: 'none' }}>
              Check new boarder
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
