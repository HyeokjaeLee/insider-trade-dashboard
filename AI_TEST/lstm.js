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
// const brain = require("brain.js");
// const net = new brain.recurrent.LSTMTimeStep();

// net.train([[1, 2, 3,4,5]],{
//     log:true,
//     logPeriod: 1000,
// });

// const output = net.run([1,2,3,4]); // 4
// console.log(output);