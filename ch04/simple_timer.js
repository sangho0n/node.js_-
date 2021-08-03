function simpleTimeout(consoleTimer){
  console.timeEnd(consoleTimer);
}
// 설정된 시간에 따라 달라지는 callback의 실행 순서
console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

