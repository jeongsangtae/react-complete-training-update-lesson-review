import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.monthChart.map((dataObject) => dataObject.value);

  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.monthChart.map((chartData) => (
        <ChartBar
          key={chartData.label}
          value={chartData.value}
          maxValue={totalMaximum}
          label={chartData.label}
        />
      ))}
    </div>
  );
};

export default Chart;
