import React, { Fragment, useContext } from "react";
import HomeHeader from "../layout/HomeHeader";

import AddIcon from "@material-ui/icons/Add";

import { Link } from "react-router-dom";

import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Grow
} from "@material-ui/core";
import { HouseContext } from "../../contexts/HouseContext";
import { BoarderContext } from "../../contexts/BoarderContext";
import OverDueBadge from "../ui/OverDueBadge";

import bg from "../../assets/bg.png";

const Home = props => {
  const { houses } = useContext(HouseContext);
  const { setSelectedHouse } = useContext(BoarderContext);

  return (
    <Fragment>
      <HomeHeader />
      <div
        style={{
          width: "100%",
          backgroundColor: "#1976d2",
          padding: "6rem 0",
          display: "flex",
          justifyContent: "flex-end",
          height: "275px",
          background: `url(${bg}) no-repeat`,
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8rem",
            width: "100%"
          }}
        >
          <Container maxWidth='md'>
            <Typography
              style={{ color: "#ffffff", marginBottom: "1rem" }}
              variant='h5'
            >
              Select Boarding house
            </Typography>
            <Grow in={true} timeout={500}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
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
                        Add Boarding house
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                {houses.map(house => (
                  <Grid item xs={12} md={4} lg={4} key={house.id}>
                    <Link
                      to='/boarding-house'
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        onClick={() => setSelectedHouse(house.id)}
                        style={{
                          width: "100%",
                          height: "208px",
                          cursor: "pointer"
                        }}
                      >
                        <CardContent
                          style={{
                            padding: "1.2rem",
                            position: "relative",
                            height: "100%"
                          }}
                        >
                          <Typography variant='h6'>{house.name}</Typography>
                          <Typography variant='caption'>
                            Available Room: 2
                          </Typography>
                          <div
                            style={{
                              position: "absolute",
                              right: "0.8rem",
                              bottom: "0.8rem"
                            }}
                          >
                            <OverDueBadge boarders={house.boarders} />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grow>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
