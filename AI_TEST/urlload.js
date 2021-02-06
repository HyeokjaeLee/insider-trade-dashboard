//var A = 'https://toy-projects-api.herokuapp.com/insidertrade/ATHA';
var A = 'https://toy-projects-api.herokuapp.com/insidertrade/GNTY';
//var A = 'https://toy-projects-api.herokuapp.com/insidertrade/AIRT';

/* 예측할 데이터 최근 50 일 함수*/
function make_test_data(arr) {
    let temp = [];
    temp = arr.flat();//1차원으로
    temp.reverse();//최근것부터 나열
    temp.splice(50);//최근50일이후는 삭제
    temp.reverse();//과거부터 50일치 나열
    // console.log("temp",temp);
    return temp;
}
/*데이터30개씩 묶어주는 함수*/
Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len / n);
    var tmp = [];

    for (var i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
    }

    return tmp;
}
function make_train_data(arr) {
    var length;
    let temp = [];
    let temp1 = [];

    temp = arr.flat();//1차원으로
    length = temp.length;

    temp1 = temp.division(30);
    console.log(temp,length,temp1,temp1.length,temp1[31].length);
    for (var i = 0; i < temp1.length; i++) {
        if (temp1[i].length < 30) {
            temp1.pop();
        }
    }
    //console.log(temp1,temp1.length);
    return temp1;
}

/*데이터 읽고 학습하는 함수*/
// function read(url){   
//     const axios = require('axios'); 
//     const getUsetApi = async () => {
//         axios.get(url).then((res) => { 
//             if(res.status == 200){  
//                 //console.log(res)
//                 let Date=[];
//                 let Z=[]; 
//                 let test_X=[];              
//                 //Z.push( res.data.map((data)=>( data.high )));
//                 //Date.push (res.data.map((data)=>( data.date)));
//                 Z.push( res.data.map((data)=>( Number((((data.high+data.low)/2)).toFixed(3)) )));//날짜의 high/low의 중간값               
//                 console.log("Z",Z.flat()); 

//                 test_X=make_test_data(Z);//최근50일치 데이서 생성
//                 console.log("test_X=",test_X); 
//                 //console.log("Date=",Date); 


//                 /*학습하기 */
//                  const brain = require("brain.js");
//                  const net = new brain.recurrent.LSTMTimeStep();
//                  net.train(Z,{
//                      log:true,
//                      logPeriod: 1000,                  
//                  });

//                 /*7일치 예측한 결과=ptweek */
//                  var output;
//                  let ptweek=[];
//                  for(var i=0;i<7;i++){ 
//                     output = net.run(test_X);
//                     ptweek.push(output);
//                     test_X.push(output);
//                     test_X=make_test_data(test_X);
//                 }
//                  console.log(ptweek);
//                  const output = net.run(test_X); // 1000번학습당 6초  //41 15개=1분58c초 -4.5   //40개이상=정확도높음//50개= -2.5차이 //2/5일 ATHA주가 25.400466918945312예상
//                  console.log(output);



//                 return res.data; 
//             }    
//         }).catch((error) => {
//             console.error(error);
//             return false;
//         })  
//     };
//     //module.exports.getUsetApi = getUsetApi; 
//     getUsetApi();
// }
/*30개씩 잘라서 학습 */
function read(url) {
    const axios = require('axios');
    const getUsetApi = async () => {
        axios.get(url).then((res) => {
            if (res.status == 200) {
                //console.log(res)

                let Z = [];
                let test_X = [];
                //Z.push( res.data.map((data)=>( data.high )));
                //Date.push (res.data.map((data)=>( data.date)));
                Z.push(res.data.map((data) => (Number((((data.high + data.low) / 2)).toFixed(3)))));//날짜의 high/low의 중간값               
                console.log("Z", Z.flat());
                test_X = make_train_data(Z);
                // test_X=make_test_data(Z);//최근50일치 데이서 생성
                //console.log("test_X=", test_X);
                // //console.log("Date=",Date); 


                // /*학습하기 */


                // const brain = require("brain.js");
                // const net = new brain.recurrent.LSTMTimeStep({
                //     inputSize: 30,
                //     hiddenLayers: [10],
                //     outputSize: 30,

                // });
                // net.train(test_X, {
                //     log: true,
                //     logPeriod: 1000,
                // });

                // const output = net.run([
                //     [
                //         29.863, 30.14, 30.155, 30.183,
                //         30.185, 30.7, 30.985, 30.882,
                //         31.05, 31.255, 31.667, 31.11,
                //         30.425, 30.55, 30.563, 30.285,
                //         30.53, 30.32, 30.325, 30.12,
                //         30.305, 30.81, 32.415, 33.274,
                //         32.13, 31.881, 31.895, 31.935,
                //         32.184, 32.1
                //     ]
                // ]); // [3, 1]
                // console.log(output);



                return res.data;
            }
        }).catch((error) => {
            console.error(error);
            return false;
        })
    };
    //module.exports.getUsetApi = getUsetApi; 
    getUsetApi();
}



read(A);


// var getUsetApi = function (url) {
//     return ((resolve) => {   
//     axios.get(url).then((res) => { 
//         if(res.status == 200){  
//             //console.log(res.data)
//             resolve(res.data);
//             return res.data; 
//         }    
//     }).catch((error) => {
//         console.error(error);
//         return false;
//         });       
//     });
// };
// module.exports.getUsetApi = getUsetApi; 