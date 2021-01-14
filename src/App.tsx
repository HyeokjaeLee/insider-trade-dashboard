import React, { useState } from "react";
import "./App.css";
import Insider_trade_info from "./components/insider_trade_info";
import { Info_selector } from "./components/info_selector";
import { get_json_data, get_IEX_data } from "./modules/base_modules";
import type { A_trade_data } from "./modules/base_modules";
const data_url = "https://toy-projects-api.herokuapp.com/insidertrade/list";
const data: A_trade_data[] = get_json_data(data_url);

function App() {
  const [test, set_test] = useState(get_IEX_data("WRLD"));
  let test2 = String(test);
  return (
    <>
      <div className="body">
        {test2}
        <Info_selector data={data} />
      </div>
    </>
  );
}

export default App;
