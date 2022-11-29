import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  // const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     setDailyData(await fetchDailyData());
  //   };
  //   console.log(dailyData, "Sajjad");
  //   fetchApi();
  // });

  // const lineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           data: dailyData.map(({ confirmed }) => confirmed),
  //           label: "infected",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map(({ deaths }) => deaths),
  //           label: "infected",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //       ],
  //     }}
  //   />
  // ) : null;

  return <div className={styles.container}>Chart</div>;
};

export default Chart;
