import { Box, Text } from "gestalt";
import React from "react";
import "gestalt/dist/gestalt.css";
import type { A_trade_data } from "../modules/base_modules";
import { getFormatDate } from "../modules/base_modules";
function Info_selector(props: any) {
  const data_set = props.data;
  const result: JSX.Element[] = data_set.map((data: A_trade_data) => (
    <li style={{ padding: "1px" }}>
      <div style={{ backgroundColor: "#F9EBDE", borderRadius: "10px", color: "white", marginLeft: "-10%" }}>
        <Box paddingX={1} paddingY={1} marginStart={5}>
          <Text weight="bold">
            {data.company_name}
            <span style={{ float: "right", fontWeight: "normal" }}>{data.ticker}</span>
          </Text>
          <Text>{data.insider_name}</Text>
          <Text>{getFormatDate(data.trade_date, "-")}</Text>
        </Box>
      </div>
    </li>
  ));
  return <ul style={{ backgroundColor: "#C5BAB0", width: "25%", padding: "2%", borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{result}</ul>;
}

export { Info_selector };
