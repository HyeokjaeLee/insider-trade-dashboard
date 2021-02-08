import React from "react";
import { getFormatDate } from "../modules/base_modules";
import { Button, ButtonGroup, ButtonToolbar, DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem } from "reactstrap";

const Stock_list_button = (props: any) => {
  const stock_list_data = props.list_data;
  const stock_item = (list_data: any) => {
    return (
      <>
        <Button><a onClick = {() => props.onclick_fn2()}><a onClick={() => props.onclick_fn(list_data)}>
          <ul>  
            <li><h4>{list_data.ticker}</h4></li>
            <li>{list_data.company_name}</li>
            <li><h6>{list_data.insider_name}</h6></li>
            <li>{getFormatDate(list_data.trade_date, "-")}</li>
          </ul>
          </a></a>
        </Button>
      </>
    );
  };
  const stock_list = stock_list_data.map((list_data: any) => stock_item(list_data));
  return (
    <div className="stock_list">
      <ButtonGroup vertical>{stock_list}</ButtonGroup>
    </div>
  );
};

export default Stock_list_button;
