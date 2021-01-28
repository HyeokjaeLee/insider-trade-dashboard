//import "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
// $.ajax({
//     url: 'data11.csv',
//     dataType: 'text',
//   }).done(CSV);

 
// function CSV( $data ){
//     var trim = /^[sxA0]+|[sxA0]+$/;
//     var i, j, result;
//     result = $data.split( 'n' );
//     i = result.length;
//     while( i-- ){
//         result[i] = result[i].split( ',' );
//         j = result[i].length;
 
//         // 각 필드를 trim 해준다.
//         while( j-- ) result[i][j] = result[i][j].replace( trim, '' );console.log(result[i][j]);
//     }
//   return result;
// }
/*ok*/ 

//const { dropout } = require("@tensorflow/tfjs");
const tf = require("@tensorflow/tfjs");
const csv = require('csv-parser');
const fs = require('fs');
const { Z_BEST_SPEED } = require("zlib");
const result = [];

let Z=[];
let Z1=[];
fs.createReadStream('data.csv')
  .pipe(csv({}))
  .on('data', (data) => result.push(data))
  .on('end',()=>{
    //console.log(result);
    Z.push( result.map((data)=>([Number(data.Price), Number(data.Qty)])) );
    Z1.push( result.map((data)=>([Number(data.ratio)])) );
   // X=result.map((data)=>({Number(data.Qty) , Number(data.Price)));
    // console.log(Z);
    // console.log(Z1);
    // console.log(Z1[0][0][0]+0.9);


    //console.log(result.map((data)=>(Number(data.Qty))));
    //console.log(result.map((data)=>(Number(data.ratio))));
    //console.log(result.map((data)=>({ticker:data.Ticker,price:Number(data.Price)})))
    //console.log(result[0].Ticker);
 



  

     //1. 과거의 데이터를 준비합니다.
//var temp=[20,21,22,23];//텐서형태의 데이터
//var sale=[40,42,44,46];
var temp=Z.flat();//텐서형태의 데이터
//console.log(Array.isArray(temp));
//console.log(typeof(temp));

//var temp1=result.map((data)=>(Number(data.Qty)));
var sale=Z1.flat();
//var sale=result.map((data)=>([Number(data.ratio)]));
//console.log(sale);
//console.log(Array.isArray(sale));
//console.log(typeof(sale));
var ttemp=tf.tensor(temp);//텐서형태의 데이터
//console.log(ttemp);
//var ttemp1=tf.tensor(temp1);
var tsale=tf.tensor(sale);
//console.log(tsale);
//ttemp.print();
//tsale.print();

// 2. 모델의 모양을 만듭니다. 
var X = tf.input({shape: [2] });
var L = tf.layers.dense({ units: 3 ,dropout: 1}).apply(X);
var Y = tf.layers.dense({ units: 1 }).apply(L);
var model = tf.model({ inputs: X, outputs: Y });

//var compileParam = {optimizer: tf.train.rmsprop(0.01), loss: tf.losses.meanSquaredError}
var compileParam = {optimizer: tf.train.adam(), loss: tf.losses.meanSquaredError}

model.compile(compileParam);

// 3. 데이터로 모델을 학습시킵니다.
//var fitParam ={epochs: 200}
var fitParam ={
  epochs: 500,
  callbacks:{
      onEpochEnd:
      function(epoch,logs){
          console.log('epoch',epoch,logs,'RMSE=>',Math.sqrt(logs.loss));//logs는 loss를 표시함(13번째줄에서)RMSE는 오차를의미
      }
  }
}
model.fit(ttemp,tsale,fitParam).then(function (result){
   
    var pt = model.predict(tf.tensor([[7.75,5000]]));//=16.2580643
    //var pt = model.predict(tf.tensor([[43.48,7000]]));//=2.2580643
    //console.log(pt);
    pt.print();
    //model.save('localstorage://my-model');

});   



});


/**/ 

    // console.log(result[0].Ticker);
    // console.log('aa');
  
// (async () => {
//   //load
//   const result = await csv().fromFile("data11.csv");
//   console.log(result);
// })();
/*33*/ 
// const filePath = "data.csv";
// var fs = require("fs");
// //import "C:\Users\User\Documents\GitHub\insider-trade-dashboard\src\modules\base_modules.ts";
// function get_cvs_data(filePath){
//   const load_data = fs.readFileSync(filePath, { encoding: "utf8" });
//   const split_by_row = load_data.split("\n");
//   const split_by_column = split_by_row.map((data) => {
//     const row_data = data.replace("\r", "");
//     return row_data.split(",");
//   });
//   const data_value = split_by_column.slice(1);
//   const result = data_value.map((data) => ({ date: new Date(data[0]), ticker: data[1] }));
//   return result;
// };

// const get_json_data = (url) => {
//   let xmlhttp = new XMLHttpRequest();
//   let json_data;
//   xmlhttp.onreadystatechange = () => {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       try {
//         json_data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + " in " + xmlhttp.responseText);
//         return;
//       }
//     }
//   };
//   xmlhttp.open("GET", url, false); //true는 비동기식, false는 동기식 true로 할시 변수 변경전에 웹페이지가 떠버림
//   xmlhttp.send();
//   return json_data;
// };

// var D = get_json_data(get_cvs_data(filePath));

// console.log(D);
// export { get_cvs_data };

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() { // 요청에 대한 콜백
//   if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(xhr.responseText);
//     } else {
//       console.error(xhr.responseText);
//     }
//   }
// };
// xhr.open('GET', 'https://www.zerocho.com/api/get'); // 메소드와 주소 설정
// xhr.send(); // 요청 전송 
/*혁재코드*/ 
// const tf = require("@tensorflow/tfjs");
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.get_csv_data = void 0;
// var fs = require("fs");
// var get_csv_data = function (filePath) {
//     var load_data = fs.readFileSync(filePath, { 
//         encoding: "utf8" 
//     });
//     var split_by_row = load_data.split("\n");
//     var split_by_column = split_by_row.map(function (data) {
//         var row_data = data.replace("\r", "");
//         return row_data.split(",");
//     });
//     var data_value = split_by_column.slice(1);
//     var result = data_value.map(function (data) { 
//         return ({ Price: data[4], Qty: data[5] }); 
//     });
//     return result;
// };
// exports.get_csv_data = get_csv_data;
// var path = require("path");
// //var get_csv_data_1 = require("./get_csv_data");
// var input_filePath = path.join(__dirname, "./data.csv");
// var cvs_data = get_csv_data(input_filePath);

// var Target_CVS_DATA = cvs_data;

// console.log(Target_CVS_DATA);