import React from "react";
import { useState } from "react";
import Charts from "./Charts";

export default function Piechart(props) {
  const data = props.data;
  const [chartdata, setchartdata] = useState({
    labels: props.data.map((d) => d.categore),
    datasets: [
      {
        lable: "categore",
        data: props.data.map((d) => d.amount),
      },
    ],
  });

  console.log("props");
  console.log(chartdata);
  return (
    <div id="chartDiv">
      {" "}
      PieChart
      <Charts chartData={chartdata} />{" "}
    </div>
  );
}
