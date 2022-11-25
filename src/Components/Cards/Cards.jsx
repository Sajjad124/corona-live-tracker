import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
//const Cards = (props) => {

const lastUpdateDate = new Date(lastUpdate).toDateString();
console.log(confirmed);
if(!confirmed){
    return 'Loading...';
}
  return (
    <div className="container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent> 
            <Typography color="textSecondary" gutterBottom> Positive Cases </Typography>
            <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={2.5} separator={","}/>
            </Typography>
            <Typography color="textsecondary" variant="h5">{lastUpdateDate}</Typography>
            <Typography variant="body2"> No. of active cases of COVID-19 </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Recovered Cases </Typography>
            <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2.5} separator={","}/>
            </Typography>
            <Typography color="textsecondary" variant="h5">{lastUpdateDate}</Typography>
            <Typography variant="body2"> No. of recoveries of COVID-19 </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths </Typography>
            <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2.5} separator={","}/>
            </Typography>
            <Typography color="textsecondary" variant="h5">{lastUpdateDate}</Typography>
            <Typography variant="body2"> No. of deaths with of COVID-19 </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
