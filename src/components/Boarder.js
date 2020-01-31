import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Grow, Fab, Tooltip } from "@material-ui/core";

import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import EventBusyRoundedIcon from "@material-ui/icons/EventBusyRounded";

import PreviousMonth from "./PreviousMonth";
import { formatDate } from "../utils/Utils";
import PaymentDialog from "./ui/PaymentDialog";

import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";

import DeleteDialog from "./ui/DeleteDialog";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    paddingBottom: "0.6rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Boarder = ({ boarder }) => {
  const classes = useStyles();

  const totalRent = boarder.roomRate + boarder.utilities;

  const dateJoined = formatDate(new Date(boarder.dateJoined.seconds * 1000));

  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const [paymentToDelete, setPaymentToDelete] = useState({});

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleClickOpenPaymentDialog = () => {
    setOpenPaymentDialog(true);
  };

  const handleClosePaymentDialog = () => {
    setOpenPaymentDialog(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteDues = datePaid => {
    setOpenDeleteDialog(true);
    setPaymentToDelete(datePaid);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const boarderDues = boarder.dues.slice(-1)[0];
  const dateToday = new Date();

  return (
    <Fragment>
      <Grow in={true} timeout={500}>
        <Card className={classes.card} elevation={2}>
          <CardContent>
            <Grid container justify='space-between'>
              <Grid item>
                <Typography variant='h5'>{boarder.name}</Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>

            <Typography variant='body2'>
              Room rate:{" "}
              {boarder.roomRate.toLocaleString(undefined, {
                minimumFractionDigits: 2
              })}{" "}
              +{" "}
              {boarder.utilities.toLocaleString(undefined, {
                minimumFractionDigits: 2
              }) + " (utilities)"}
            </Typography>
            <Typography variant='h6'>
              {totalRent.toLocaleString(undefined, {
                minimumFractionDigits: 2
              })}
              <span style={{ fontSize: "12px" }}>/month</span>
            </Typography>
            <Typography variant='caption'>Date Joined: {dateJoined}</Typography>
            <br />
            <br />
            <Divider />
            <br />

            <Typography variant='h6'>Due Date</Typography>
            <br />
            <PreviousMonth boarder={boarder} />
            <br />
          </CardContent>
          <CardActions style={{ position: "relative" }}>
            {/* <Button size='small'>More Details</Button> */}
            {dateToday > new Date(boarderDues.dueDate.seconds * 1000) ? (
              <Fab
                size='small'
                variant='extended'
                onClick={handleClickOpenPaymentDialog}
                color='secondary'
              >
                <EventBusyRoundedIcon
                  fontSize='small'
                  style={{ marginRight: "0.4rem" }}
                />
                Overdue
              </Fab>
            ) : (
              <Fab
                size='small'
                variant='extended'
                elevation={0}
                color='primary'
                onClick={handleClickOpenPaymentDialog}
              >
                <PaymentRoundedIcon style={{ marginRight: "0.4rem" }} />
                Make Payment
              </Fab>
            )}

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              style={{ position: "absolute", right: "1rem" }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography variant='h6'>Contact Details</Typography>
              <Typography variant='body2'>
                Permanent Addess: {boarder.permanentAddress}
              </Typography>
              <Typography variant='body2'>
                Mobile Number: {boarder.mobileNumber}
              </Typography>
              <Typography variant='body2'>Email: {boarder.email}</Typography>
              <br />

              <Divider />
              <br />
              <Typography variant='h6'>Boarder Info</Typography>
              <Typography variant='body2'>
                Deposit:{" "}
                {boarder.deposit.toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </Typography>
              <Typography variant='body2'>
                Room Number: {boarder.roomNumber}
              </Typography>
              <Typography variant='body2'>
                Type of Rent: {boarder.typeOfRent}
              </Typography>
              <br />

              <Divider />
              <br />
              <Typography variant='h6'>Payment History</Typography>
              {boarder.dues.map((due, i) => (
                <Grid container key={i} justify='center' alignItems='center'>
                  <Grid item xs={8}>
                    <Typography variant='body2'>
                      {formatDate(new Date(due.datePaid.seconds * 1000))}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='body2'>
                      {due.amountPaid.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                      })}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    {i >= 1 && (
                      <Tooltip title='Delete' placement='right'>
                        <RemoveCircleOutlineRoundedIcon
                          style={{
                            color: "red",
                            cursor: "pointer",
                            fontSize: "1rem"
                          }}
                          onClick={() => handleDeleteDues(due)}
                        />
                      </Tooltip>
                    )}
                  </Grid>
                </Grid>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      </Grow>
      <PaymentDialog
        open={openPaymentDialog}
        handleClose={handleClosePaymentDialog}
        boarder={boarder}
      />
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        toDelete={paymentToDelete}
        boarder={boarder}
      />
    </Fragment>
  );
};

export default Boarder;
