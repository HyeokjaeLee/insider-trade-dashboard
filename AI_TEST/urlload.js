//var A = 'https://toy-projects-api.herokuapp.com/insidertrade/ATHA';
var A = 'https://toy-projects-api.herokuapp.com/insidertrade/HY';

/*데이터 읽고 학습하는 함수*/
function read(url){   
    const axios = require('axios'); 
    const getUsetApi = async () => {
        axios.get(url).then((res) => { 
            if(res.status == 200){  
                //console.log(res.data)
                let Z=[];               
                //Z.push( res.data.map((data)=>( data.high )));
                Z.push( res.data.map((data)=>( ((data.high+data.low)/2) )));//날짜의 high/low의 중간값
               
                console.log(Z.flat()); 
                //Z.push( res.data.map((data)=>([Number(data.open)])));
                //console.log((Z.flat()).flat()); 

                /*학습하기 */

              
                const brain = require("brain.js");
                const net = new brain.recurrent.LSTMTimeStep();
                net.train(Z,{
                    log:true,
                    logPeriod: 1000,
                   
                });
                
                const output = net.run([
                    43.125,  43.29999923706055,  43.22999954223633,  42.42499923706055,
                    41.454999923706055, 41.334999084472656,  41.39000129699707, 41.084999084472656,
                     40.85499954223633, 41.704999923706055, 41.099998474121094, 40.135000228881836,
                     40.93499946594238,  41.30999946594238,  42.44000053405762,             42.375,
                     43.20000076293945,   43.4950008392334, 44.885000228881836, 46.079999923706055,
                     46.88999938964844, 46.170000076293945, 44.290000915527344,   43.5049991607666,
                     45.18499946594238, 45.599998474121094, 45.510000228881836,  47.52000045776367,
                     47.03499984741211,  48.31999969482422,  47.97999954223633,  48.28499984741211]); // 1000번학습당 6초  //41 15개=1분58c초 -4.5   //40개이상=정확도높음//50개= -2.5차이
                console.log(output);


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