// import { Favorite, MoreVert, Share } from "@mui/icons-material";
// import {
//   Avatar,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   IconButton,
//   Typography,
// // } from "@mui/material";
// import { Box } from "@mui/material";
// import pk from "../src/Images/pk.jpg";
import "./App.css";

import Chart from "./Components/Charts/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Cards from "./Components/Cards/Cards";
import { fetchData } from "./Api/index";
import React from "react";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
