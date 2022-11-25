import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./Cards.module.css";

const Cards = (props) => {
  console.log(props);
  return (
    <div className="container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Infected </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textsecondary" variant="h5">Real Date</Typography>
            <Typography variant="body2"> No. of active cases of COVID-19 </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Recovered </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textsecondary" variant="h5">Real Date</Typography>
            <Typography variant="body2"> No. of recoveries of COVID-19 </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textsecondary" variant="h5">Real Date</Typography>
            <Typography variant="body2"> No. of deaths of COVID-19 </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
