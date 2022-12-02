import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./Cards.module.css";
import cx from "classnames";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //const Cards = (props) => {

  const lastUpdateDate = new Date(lastUpdate).toDateString();
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="container">
      <Typography
        variant="h5"
        sx={{ textAlign: "center", paddingBottom: "20px", color: "green" }}
      >
        Covid-19 Live Tracker App
      </Typography>
      <Grid container justifyContent="center" sx={{ paddingBottom: "20px" }}>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.positive)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Positive{" "}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textsecondary" variant="h5">
              {lastUpdateDate}
            </Typography>
            <Typography variant="body2">
              {" "}
              No. of active cases of COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Recovered Cases{" "}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textsecondary" variant="h5">
              {lastUpdateDate}
            </Typography>
            <Typography variant="body2">
              {" "}
              No. of recoveries of COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Deaths{" "}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textsecondary" variant="h5">
              {lastUpdateDate}
            </Typography>
            <Typography variant="body2">
              {" "}
              No. of deaths with of COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
