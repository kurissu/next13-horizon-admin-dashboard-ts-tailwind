"use client";

import React, { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgCharts } from "ag-charts-community";
import { getData } from "./data";
// import deepClone from "deepclone";

const ChartExample = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Sales by Month",
    },
    data: getData(),
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "subscriptions",
        yName: "Subscriptions",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "services",
        yName: "Services",
      },
      {
        type: "area",
        xKey: "month",
        yKey: "products",
        yName: "Products",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

export default ChartExample;
