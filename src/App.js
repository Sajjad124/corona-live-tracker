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
import { fetchDailyData, fetchData } from "./Api/index";
import React from "react";
import { Box, Typography } from "@mui/material";

class App extends React.Component {
  // const [Data, setDate] = useState(data);

  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    
    //set state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data } = this.state;
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "40px",
          height: "100vh",
          boxShadow: "2px 3px 5px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </Box>
    );
  }
}

export default App;
