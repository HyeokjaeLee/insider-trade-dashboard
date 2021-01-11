import { get_json_data, getFormatDate } from "../modules/base_modules";
const data_url = "https://toy-projects-api.herokuapp.com/tradeinfo";
const data = get_json_data(data_url);

interface A_trade_data {
  ticker: string;
  trade_date: Date;
  company_name: string;
  insider_name: string;
  price: number;
  qty: number;
  owned: number;
  value: number;
}

function Insider_trade_info(props: any) {
  const result: JSX.Element[] = data.map((data: A_trade_data, index: number) => (
    <ul>
      <li>{data.ticker}</li>
      <li>{getFormatDate(data.trade_date, "-")}</li>
      <li>{data.company_name}</li>
      <li>{data.insider_name}</li>
      <li>{data.price}</li>
    </ul>
  ));
  return <>{result}</>;
}

export default Insider_trade_info;
