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
// interface B_trade_data{
//   data:object;
//   date:Date;
//   open:number;
//   high:number;
//   low:number;
//   close:number;
// }

const get_json_data = (url: string) => {
  
  let xmlhttp = new XMLHttpRequest();
  let json_data: any;
   
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        json_data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
    }
  };
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  return json_data;
};
function search_data(input_txt: string, stock_data: A_trade_data[]) {
  const filtered_stock_data = stock_data.filter(function (element: A_trade_data) {
    return element.ticker.includes(input_txt) || element.company_name.includes(input_txt);
    
  });
  return filtered_stock_data;
}
function getFormatDate(input_date: Date, form: string) {
  const date = new Date(input_date);
  const num2str = (num: number) => {
    let result;
    if (num < 10) {
      result = "0" + num;
    } else {
      result = String(num);
    }
    return result;
  };
  let year: number = date.getFullYear(); //yyyy
  let month: string = num2str(1 + date.getMonth()); //M
  let day: string = num2str(date.getDate());

  return year + form + month + form + day;
}

export { get_json_data, getFormatDate, search_data };
export type { A_trade_data };
