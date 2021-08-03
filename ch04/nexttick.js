var fs = require("fs");
fs.stat("nexttick.js", function(err, stats){
  if(stats) { console.log("nexttick.js Exists"); }
});
setImmediate(function(){
  console.log("Immediate Timer 1 Executed");
});
setImmediate(function(){
  console.log("Immediate Timer 2 Executed");
});
process.nextTick(function(){
  console.log("Next Tick 1 Executed");
});
process.nextTick(function(){
  console.log("Next Tick 2 Executed");
});
// nexttick은 setImmediate와 달리 입출력 이벤트보다 먼저 실행되기 때문에, 입출력의 starvation을 야기할 수 있음.