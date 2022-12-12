import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

export default function Charts({ chartData }) {
  console.log(chartData);

  return <Bar data={chartData} />;
}
