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
            <Typography color="secondary" gutterBottom>
              Infected
            </Typography>
          </CardContent>
        </Grid>
        <Card></Card>
      </Grid>
    </div>
  );
};

export default Cards;
