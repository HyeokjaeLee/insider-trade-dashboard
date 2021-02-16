import React from "react";
import { A_trade_data, getFormatDate } from "../modules/base_modules";
import { Button, ButtonGroup, ButtonToolbar, DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem } from "reactstrap";

const Stock_list_button = (props: any) => {
  const srch_txt = props.search_txt;
  const stock_list_data: any = props.list_data;
  
  const stock_item = (list_data: A_trade_data) => {
    return (
      <>
        <Button><a onClick={() => props.onclick_fn(list_data)}>
          <ul>  
            <li><h4>{list_data.ticker}</h4></li>
            <li>{list_data.company_name}</li>
            <li><h6>{list_data.insider_name}</h6></li>
            <li>{getFormatDate(list_data.trade_date, "-")}</li>
          </ul>
          </a>
        </Button>
      </>
    );
  };
  const stock_list = stock_list_data.map((list_data: A_trade_data) => stock_item(list_data));
  
  return (
    <div className="stock_list">
      <ButtonGroup vertical>{stock_list}</ButtonGroup>
    </div>
  );
};

export default Stock_list_button;
