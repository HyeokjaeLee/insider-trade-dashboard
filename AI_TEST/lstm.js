/*1*/ 
// //모델환경새팅
// const config = {
//     hiddenLayers: [3],
//     activation: 'sigmoid',
//     };
// //네트워크생성
// const brain = require("brain.js");
// const net = new brain.NeuralNetwork(config);

// //학습시작
// net.train([
//     {input: [0, 0], output: [0]},
//     {input: [0, 1], output: [1]},
//     {input: [1, 0], output: [1]},
//     {input: [1, 1], output: [0]}]);

// console.log(net.run([0,0]));
// console.log(net.run([1,0]));
// console.log(net.run([0,1]));
// console.log(net.run([1,1]));

/*2*/ 
// const brain = require("brain.js");
// const net = new brain.recurrent.LSTMTimeStep({
//     inputSize: 2,
//     hiddenLayers: [10],
//     outputSize: 2,
//   }); 
//   net.train([
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ]);
//   const output = net.run([
//     [1, 3],
//     [2, 2],
//   ]); // [3, 1]
//   console.log(output);

/*3*/ 
// const brain = require("brain.js");
// const net = new brain.recurrent.LSTMTimeStep({
//     inputSize: 1,
//     hiddenLayers: [10],
//     outputSize: 1,
//   });
// net.train([[1, 2, 3, 4, 5]]);
// const output = net.run([1, 2,3,4]); // 3
// console.log(output);


/*4*/
var X_train;
var Y_train;

var data=[[1,1],[2,2],[3,3]];
 //var data=[1, 2, 1,3,4,3,5,6,5,7,8,7,9,10,9];
// const brain = require("brain.js");
// const net = new brain.recurrent.LSTMTimeStep();
// net.train([data],{
//     log:true,
//     logPeriod: 1000,
// });
// const output = net.run([1,2,1,3,4]); // 4
// console.log(output);
    X_train.data.length=data.length-1;
    console.log(X_train);
/*사이트 값 가져오기*/ 
//방법1
// const http = require('https'); // http 모듈 불러오기(설치 해야함 https모듈)
// let url="https://toy-projects-api.herokuapp.com/insidertrade/ATHA";
// let Z=[];
// http.get(url, stream => {
//   let rawdata = '';
//   stream.setEncoding('utf8');
//   stream.on('data', buffer => rawdata += buffer);
//   stream.on('end', function () {
//     console.log(rawdata); // 긁어온 내용 뿌리기
//     const obj = JSON.parse(rawdata);
//     //Z.push( rawdata.map((data)=>([Number(data.open)])) );
//     //console.log(obj);
//     Z.push( obj.map((data)=>([Number(data.open)])) );
//     //console.log((Z.flat()).flat()); 
//     /**/ 

//     /**/ 
//   });

// });
// console.log((Z.flat()).flat()); 
/**/ 
//방법2

// var A = require("./urlload.js"); 
// //(async () => {
// var data =   A.getUsetApi('https://toy-projects-api.herokuapp.com/insidertrade/ATHA');
// console.log(data);
// //})();
// console.log("asd");
// console.log("asd");
// console.log("asd");
