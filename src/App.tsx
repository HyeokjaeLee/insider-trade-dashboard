import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stock_list_button from "./component/stock_list_button";
import Chart from "./component/chart";
import { search_data, get_json_data } from "./modules/base_modules";
import type { A_trade_data } from "./modules/base_modules";
import { chart } from "highcharts";
import { ListGroupItemHeading } from "reactstrap";

const stock_list_data: A_trade_data[] = get_json_data("https://toy-projects-api.herokuapp.com/insidertrade/list");
const base_url = "https://toy-projects-api.herokuapp.com/insidertrade/";

function App() {
  const [filtered_stock_data, set_filtered_stock_data] = useState<A_trade_data[]>(stock_list_data);
  const [chart_data, set_chart_data] = useState(stock_list_data[0]);
  const [stock_data, set_stock_data] = useState(get_json_data(base_url + stock_list_data[0].ticker));
  const [loading, set_loading] = useState("");
  const [loading_txt, set_loading_txt] = useState("");
  const [search_txt, set_search_txt] = useState("");

  const change_search_txt = (e: any) => {
    set_search_txt(e.target.value);
    set_filtered_stock_data(search_data(e.target.value, stock_list_data));
    console.log(search_txt);
    console.log(stock_list_data);
  };
  const isloading = () => {
    set_loading("spinner-border text-light");
    set_loading_txt("now Loading...");
  };
  const isloaded = () => {
    set_loading("now Loading...");
    set_loading_txt("");
  };
  const btn_click_event = (selected_stock_data: A_trade_data) => {
    isloading();
    setTimeout(function () {
      set_chart_data(selected_stock_data);
      set_stock_data(get_json_data(base_url + selected_stock_data.ticker));
      isloaded();
    }, 100);
  };

  return (
    <div className="body_div">
      <div>
        <input
          placeholder="SEARCH"
          type={"text"}
          value={search_txt}
          className="top_bar_search_box"
          onChange={change_search_txt}
        />
      </div>
      <div className="stock_list_container">
        <Stock_list_button list_data={filtered_stock_data} onclick_fn={btn_click_event} search_txt={search_txt} />
      </div>

      <div className="chart_container">
        <Chart stock_data={stock_data} trade_data={chart_data} />
      </div>
      <div className="d-flex justify-content-center">
        <div className={loading} role="status"></div>
        <span className="load_text">{loading_txt}</span>
      </div>
    </div>
  );
}

export default App;
