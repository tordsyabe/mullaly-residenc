import React, { useState, useContext, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import firebase from '../../firebase';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { MenuItem, Grid, DialogContentText } from '@material-ui/core';
import { saveBoarder } from '../../services/BoarderService';
import { BoarderContext } from '../../contexts/BoarderContext';

const AddBoarderDialog = ({ open, handleClose }) => {
  const { selectedHouse } = useContext(BoarderContext);

  const [isSavingBoarder, setIsSavingBoarder] = useState(false);
  const [dateJoined, setDateJoined] = useState(new Date());
  useEffect(() => {
    firebase
      .firestore()
      .collection('houses')
      .doc(selectedHouse)
      .get()
      .then(doc => {
        setRooms(doc.data().rooms);
        setHouse(doc.data());
      });
  }, []);

  const [house, setHouse] = useState({});
  const [houseId, setHouseId] = useState(selectedHouse);
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState([]);
  const [roomNumber, setRoomNumber] = useState('');
  const [roomRate, setRoomRate] = useState(0);
  const [typeOfRent, setTypeOfRent] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [advancePayment, setAdvancePayment] = useState(0);

  const [email, setEmail] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleDateChange = date => {
    setDateJoined(date);
  };

  const handleSaveBoarder = e => {
    e.preventDefault();
    setIsSavingBoarder(true);

    const amountPaid = parseInt(advancePayment);
    const balance = parseInt(roomRate) - parseInt(advancePayment);
    const outstanding =
      parseInt(roomRate) + parseInt(utilities) + parseInt(balance);

    saveBoarder({
      dateJoined,
      name,
      roomRate: parseInt(roomRate),
      utilities: parseInt(utilities),
      advancePayment: parseInt(advancePayment),
      deposit: parseInt(deposit),
      roomNumber,
      typeOfRent,
      house: firebase.firestore().doc(`houses/${houseId}`),
      email,
      mobileNumber,
      permanentAddress,
      dues: [
        {
          amountPaid,
          balance,
          datePaid: dateJoined,
          dueDate: new Date(
            new Date(dateJoined).setMonth(dateJoined.getMonth() + 1)
          ),
          isPaid: true,
          isPartiallyPaid: parseInt(advancePayment) < parseInt(roomRate),
          outstanding,
          isUtilitiesPaid:
            parseInt(utilities) ===
            parseInt(advancePayment) - parseInt(roomRate) + parseInt(utilities)
        }
      ]
    }).then(docRef => {
      firebase
        .firestore()
        .collection('houses')
        .doc(houseId)
        .update({
          boarders: firebase.firestore.FieldValue.arrayUnion(
            firebase.firestore().doc(`boarders/${docRef.id}`)
          )
        })
        .then(() => {
          handleClose();
          setDateJoined('');

          setHouseId('');
          setName('');
          setRoomNumber('');
          setRoomRate('');
          setTypeOfRent('');
          setDeposit('');
          setUtilities('');
          setAdvancePayment('');

          setEmail('');
          setPermanentAddress('');
          setMobileNumber('');
          setIsSavingBoarder(false);
        });

      console.log(docRef.id);
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Add Boarder</DialogTitle>
      <form onSubmit={handleSaveBoarder}>
        <DialogContent>
          <DialogContentText>
            Add details for new boarder of {house.name}.
          </DialogContentText>
          <DialogContentText>
            Add details for new boarder of {house.name}.
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='dateJoined'
              label='Joining Date'
              value={dateJoined}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              fullWidth
              autoOk
            />
          </MuiPickersUtilsProvider>

          <TextField
            margin='dense'
            id='name'
            label='Boarder Name'
            type='text'
            fullWidth
            variant='outlined'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField
                margin='dense'
                id='rootRate'
                label='Room Rate'
                type='number'
                variant='outlined'
                required
                value={roomRate}
                onChange={e => setRoomRate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='dense'
                id='utilities'
                label='Utilities'
                type='number'
                variant='outlined'
                required
                value={utilities}
                onChange={e => setUtilities(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                margin='dense'
                id='advancePayment'
                label='Advance Payment'
                type='number'
                variant='outlined'
                required
                value={advancePayment}
                onChange={e => setAdvancePayment(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                margin='dense'
                id='deposit'
                label='Deposit'
                type='number'
                variant='outlined'
                required
                value={deposit}
                onChange={e => setDeposit(e.target.value)}
              />
            </Grid>
          </Grid>

          <TextField
            select
            fullWidth
            variant='outlined'
            margin='dense'
            label='Select room number'
            value={roomNumber}
            required
            onChange={e => {
              setRoomNumber(e.target.value);
            }}>
            {rooms.map(room => (
              <MenuItem key={room.number} value={room.number}>
                Room {room.number}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            margin='dense'
            id='typeOfRent'
            label='Room Type'
            type='text'
            fullWidth
            variant='outlined'
            required
            value={typeOfRent}
            onChange={e => setTypeOfRent(e.target.value)}
          />

          <TextField
            margin='dense'
            id='mobile'
            label='Mobile Number'
            type='text'
            fullWidth
            variant='outlined'
            value={mobileNumber}
            onChange={e => setMobileNumber(e.target.value)}
          />

          <TextField
            margin='dense'
            id='email'
            label='Email'
            type='email'
            fullWidth
            variant='outlined'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            margin='dense'
            id='address'
            label='Permanent Address'
            type='text'
            fullWidth
            variant='outlined'
            value={permanentAddress}
            onChange={e => setPermanentAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button type='submit' color='primary' disabled={isSavingBoarder}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddBoarderDialog;
