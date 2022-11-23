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
import "./App.css";

import Chart from "./Components/Charts/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className="container">
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
