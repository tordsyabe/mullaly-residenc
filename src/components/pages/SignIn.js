import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import logo from "../../assets/logo.png";
import { signIn } from "../../services/AuthService";

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import SingOutButton from "../ui/SingOutButton";

function Copyright() {
  return (
    <Fragment>
      <Typography variant='body2' color='textSecondary' align='center'>
        Copyright © Mullaly Residence {new Date().getFullYear()}.
      </Typography>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const history = useHistory();
  const classes = useStyles();

  const { isLoading, setIsAuthenticated, currentUser } = useContext(
    AuthContext
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();

    signIn(email, password)
      .then(() => {
        history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <img src={logo} alt='mullaly residence' width='40px' />
        <Typography variant='h6'>Mullaly Residence</Typography>
        <br />
        <form className={classes.form} noValidate onSubmit={handleSignIn}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            type='email'
            autoComplete='email'
            value={email}
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            autoComplete='current-password'
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
        <SingOutButton />
      </Box>
    </Container>
  );
}
