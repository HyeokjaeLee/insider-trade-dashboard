import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stock_list_button from "./component/stock_list_button";
import Chart from "./component/chart";
import { get_json_data } from "./modules/base_modules";
import { chart } from "highcharts";
const stock_list_data = get_json_data("https://toy-projects-api.herokuapp.com/insidertrade/list");
const base_url = "https://toy-projects-api.herokuapp.com/insidertrade/";

function App() {
  const [chart_data, set_chart_data] = useState(stock_list_data[0]);
  const [stock_data, set_stock_data] = useState(get_json_data(base_url + stock_list_data[0].ticker));//useState 로 변경 let,const사용
  var test4 = (selected_stock_data: any) => {
    set_chart_data(selected_stock_data);
    set_stock_data(get_json_data(base_url + selected_stock_data.ticker));
    console.log(stock_data);
    console.log(chart_data);
  };
  return (
    <div className="body_div">
      <div className="stock_list_container">
        <Stock_list_button list_data={stock_list_data} onclick_fn={test4}/>
      </div>
      <div className="chart_container">
        <Chart stock_data={stock_data} trade_data={chart_data} />
      </div>
    </div>
  );
}

export default App;
