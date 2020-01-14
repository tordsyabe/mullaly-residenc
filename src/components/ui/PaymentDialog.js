import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import firebase from '../../firebase';
import { formatDate } from '../../utils/Utils';

const PaymentDialog = ({ open, handleClose, boarder }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('');
  const [note, setNote] = React.useState('');

  const boarderDues = boarder.dues.slice(-1)[0];
  const dueDate = formatDate(new Date(boarderDues.dueDate.seconds * 1000));

  const dueAmount = boarderDues.outstanding + boarderDues.balance;

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const nextDueDate = new Date(boarderDues.dueDate.seconds * 1000);

  const handlePayment = e => {
    e.preventDefault();
    // console.log(new Date(new Date(dueDate).setMonth(dueDate.getMonth() + 1)));

    firebase
      .firestore()
      .collection('boarders')
      .doc(boarder.id)
      .update({
        dues: firebase.firestore.FieldValue.arrayUnion({
          amountPaid: parseInt(amount),
          balance:
            parseInt(boarder.roomRate) +
            parseInt(boarder.utilities) +
            parseInt(boarderDues.balance) -
            parseInt(amount),
          datePaid: selectedDate,
          dueDate: new Date(nextDueDate.setMonth(nextDueDate.getMonth() + 1)),
          isPaid: true,
          isPartiallyPaid:
            parseInt(boarderDues.outstanding) +
              parseInt(boarderDues.balance) !==
            parseInt(amount),
          isUtilitiesPaid: false,
          outstanding: parseInt(boarder.roomRate) + parseInt(boarder.utilities)
        })
      });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Make Payment</DialogTitle>
        <form onSubmit={handlePayment}>
          <DialogContent>
            <DialogContentText>
              ({boarder.name}) Outstanding balance of{' '}
              <span style={{ fontWeight: 'bold' }}>{dueAmount.toFixed(2)}</span>{' '}
              . Any balance from previous month will be added on the current
              outstanding.
              <br />
              <br />
              Due date: <span style={{ fontWeight: 'bold' }}>{dueDate}</span>
              <br />
            </DialogContentText>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Payment Date'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              fullWidth
              autoOk
            />
            <TextField
              margin='dense'
              id='amount'
              label='Amount'
              type='number'
              fullWidth
              variant='outlined'
              required
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <TextField
              margin='dense'
              id='note'
              label='Note'
              type='text'
              fullWidth
              variant='outlined'
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button type='submit' color='primary'>
              Pay
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default PaymentDialog;
