import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function ChartApp() {
  const data = {
    labels: ['', '','','',''],
    datasets: [
      {
        label: "",
        data: [10, 11, 12, 15, 19, 5],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192,.5)",
        fill: true,
        tension: 1,
        showLine: false,

        radius: 0,
      },
    ],
  };
  return (
    <div>
      <Line
        datasetIdKey="id"
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false, //this will remove only the label
                },
              },
            ],
          },
          bezierCurve: true,
          legend: {
            display: true,
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                console.log(tooltipItem);
                return tooltipItem.yLabel;
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ChartApp;
