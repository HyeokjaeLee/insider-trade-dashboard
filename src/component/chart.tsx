import React, { Component, Fragment, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getFormatDate } from "../modules/base_modules";

function Chart(props: any) {
  console.log("chart");
  const stock_data = props.stock_data; //baseURL + ticker API
  //const [stock_data,set_stock_data] = useState(props.stock_data);

  const chart_data = stock_data.data.map((stock_data: any) => [new Date(stock_data.date).getTime(), stock_data.close]);

  const trade_data = props.trade_data;
  //price_data.push([new Date(trade_data.trade_date).getTime, trade_data.price]);

  //price.push(trade_data.price);
  //date.push(trade_date);

  const options = {
    chart: {
      type: "line",
      inverted: false,
    },
    title: {
      text: trade_data.company_name,
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      margin: 15,
      type: "datetime",
      labels: {
        format: "{value:%Y-%m-%d}",
      },
      showFirstLabel: true,
      showLastLabel: true,
    },
    yAxis: {},
    legend: {
      reversed: true,
    },
    navigator: {
      height: 60,
      minWidth: 4000,
      handles: {
        backgroundColor: "gray",
        borderColor: "#02343f",
      },
      series: { data: chart_data },
    },

    rangeSelector: {
      selected: 5,
      inputEnabled: false,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
          format: "<b>{point.y}</b>",
        },
      },
    },
    series: [{ name: trade_data.company_name, data: chart_data }],
  };

  return (
    <div className="chart">
      <Fragment>
        <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
      </Fragment>
    </div>
  );
}

export default Chart;
