import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stock_list_button from "./component/stock_list_button";
import Chart from "./component/chart";
import { get_json_data } from "./modules/base_modules";
import { chart } from "highcharts";
import { ListGroupItemHeading } from "reactstrap";

const stock_list_data = get_json_data("https://toy-projects-api.herokuapp.com/insidertrade/list");
const base_url = "https://toy-projects-api.herokuapp.com/insidertrade/";


function App() {
  const [chart_data, set_chart_data] = useState(stock_list_data[0]);
  const [stock_data, set_stock_data] = useState(get_json_data(base_url + stock_list_data[0].ticker));//useState 로 변경 let,const사용
  const [loading, set_loading] = useState("Loaded!");
  const [loading_txt,set_loading_txt] = useState("");
  var isloading = () => {
    set_loading("spinner-border text-light");
    set_loading_txt("now Loading...");
  };
  var isloaded = () => {
    set_loading("now Loading...");
    set_loading_txt("");
  };
  var test4 = (selected_stock_data: any) => {
    isloading();
    setTimeout(function(){
    set_chart_data(selected_stock_data);
    set_stock_data(get_json_data(base_url + selected_stock_data.ticker));
    isloaded();  
  },100)
    
    console.log(stock_data);
    console.log(chart_data);
    
  };

  return (
    <div className="body_div">
      
      <div className="stock_list_container">
        <Stock_list_button list_data={stock_list_data} onclick_fn={test4} onclick_fn2={isloading}/>
      </div>
      
      <div className="chart_container">
        <Chart stock_data={stock_data} trade_data={chart_data} event_fn={isloading} event_fn2={isloaded} />
        
      
      </div>
      <div className="d-flex justify-content-center">
        <div className={loading} role="status">
          
        </div>
        <span className = "load_text">{loading_txt}</span>
        </div>
    </div>
    
    
  );
}

export default App; 


