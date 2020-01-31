import React, { useContext, Fragment } from "react";

import Boarder from "./Boarder";

import { Link } from "react-router-dom";
import { BoarderContext } from "../contexts/BoarderContext";
import {
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  Container,
  Grow
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const Boarders = props => {
  const { boarders, isBoardersEmpty } = useContext(BoarderContext);

  if (isBoardersEmpty) {
    return (
      <Grid
        container
        justify='center'
        alignContent='center'
        style={{
          marginTop: "8rem"
        }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (boarders.length === 0) {
    return (
      <Fragment>
        <Container maxWidth='md'>
          <Grow in={true} timeout={500}>
            <Grid container justify='center' spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Link
                  to='/boarding-house/add-boarder'
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      width: "100%",
                      height: "208px",
                      cursor: "pointer"
                    }}
                  >
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        height: "100%"
                      }}
                    >
                      <AddIcon fontSize='large' color='primary' />
                      <br />
                      <Typography color='primary' variant='subtitle2'>
                        Add boarder
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </Grow>
        </Container>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        {boarders.map(boarder => (
          <Grid key={boarder.id} item xs={12} lg={4} md={6}>
            <Boarder boarder={boarder} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Boarders;
