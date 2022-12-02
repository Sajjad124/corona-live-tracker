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
    // console.log(country);
    //set state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
