import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stock_list_button from "./component/stock_list_button";
import Chart from "./component/chart";
import { get_json_data } from "./modules/base_modules";
const stock_list_data = get_json_data("https://toy-projects-api.herokuapp.com/insidertrade/list");
const base_url = "https://toy-projects-api.herokuapp.com/insidertrade/";
const stock_data = get_json_data(base_url + stock_list_data[0].ticker);
function App() {
  return (
    <div className="body_div">
      <div className="stock_list_container">
        <Stock_list_button list_data={stock_list_data} />
      </div>
      <div className="chart_container">
        <Chart stock_data={stock_data} trade_data={stock_list_data[0]} />
      </div>
    </div>
  );
}

export default App;
