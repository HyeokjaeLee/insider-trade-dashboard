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
const IEX_API_token = "pk_6f85e99e8b8a4ba78ff077b5d532a533";
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
  xmlhttp.open("GET", url, false); //true는 비동기식, false는 동기식 true로 할시 변수 변경전에 웹페이지가 떠버림
  xmlhttp.send();
  return json_data;
};
const get_IEX_data = (ticker: string) => {
  const get_URL = "https://cloud.iexapis.com/stable/stock/" + ticker + "/book?token=" + IEX_API_token;
  return get_json_data(get_URL);
};
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

export { get_json_data, getFormatDate, get_IEX_data };
export type { A_trade_data };
