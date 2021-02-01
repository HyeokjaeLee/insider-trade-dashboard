import React, { Component, Fragment, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getFormatDate } from "../modules/base_modules";

const Chart = (props: any) => {
  const stock_data = props.stock_data;
  //const [stock_data,set_stock_data] = useState(props.stock_data);
  const chart_data = stock_data.map((stock_data: any) => [new Date(stock_data.date).getTime(), stock_data.close]);
  
  const trade_data = props.trade_data;
  //price_data.push([new Date(trade_data.trade_date).getTime, trade_data.price]);
  const [data, set_data] = useState<any>(chart_data);
  console.log("--------------------");
  console.log(data);
  console.log("--------------------");
  //price.push(trade_data.price);
  //date.push(trade_date);
  
  const options = {
    chart: {
      type: "line",
      inverted: false,
      scrollablePlotArea: {
        minWidth: 4000,
      },
    },
    title: {
      text: "Stock Chart",
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
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
          format: "<b>{point.y}</b>",
        },
      },
    },
    series: [{ name: trade_data.company_name, data: data }],
  };
  return (
    <div className="chart">
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Fragment>
    </div>
  );
};

export default Chart;

