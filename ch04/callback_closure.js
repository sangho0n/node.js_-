function logCar(logMsg, callback){
  process.nextTick(function() {
    callback(logMsg);
  });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  logCar(message, function(){
    console.log("Normal Callback: " + message);
  });
}
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  (function(msg){ // 래퍼 함수를 통한 비동기적 접근 허용
    logCar(msg, function(){
      console.log("Closure Callback: " + msg);
    });
  })(message);
}
/*
출력 예시
b
b
b
f
p
b
*/
