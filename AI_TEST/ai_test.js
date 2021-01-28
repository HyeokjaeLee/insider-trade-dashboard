//console.log("온도에따른 판매량 예측");
 // 1. 과거의 데이터를 준비합니다.
var temp=[20,21,22,23];//텐서형태의 데이터
var sale=[40,42,44,46];
var ttemp=tf.tensor(temp);//텐서형태의 데이터
var tsale=tf.tensor(sale);
ttemp.print();
// 2. 모델의 모양을 만듭니다. 
var X = tf.input({shape: [1] });
var Y = tf.layers.dense({ units: 1 }).apply(X);
var model = tf.model({ inputs: X, outputs: Y });
//model.add 추가 가능//
//학습을위한준비:최적화 함수와 손실함수  설정
var compileParam = {optimizer: tf.train.adam(), loss: tf.losses.meanSquaredError}
model.compile(compileParam);

// 3. 데이터로 모델을 학습시킵니다.
//var fitParam ={epochs: 200}
var fitParam ={
    epochs: 100,
    callbacks:{
        onEpochEnd:
        function(epoch,logs){
            console.log('epoch',epoch,logs,'RMSE=>',Math.sqrt(logs.loss));//logs는 loss를 표시함(13번째줄에서)RMSE는 오차를의미
        }
    }
}
model.fit(ttemp,tsale,fitParam).then(function (result){
   
    var pt = model.predict(ttemp);
    pt.print();

 
});   

    //var nexttemp=[15,16,17,18,19];
    //var nextsale=tf.tensor2d(nexttemp,[nexttemp.length,1]);
    //var nextresult=model.predict(nextsale);
    //nextresult.print();