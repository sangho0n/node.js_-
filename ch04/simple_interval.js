var x=0, y=0, z=0;
function displayValues(){
  console.log("X=%d; Y=%d; Z=%d", x, y, z);
}
function updateX(){
  x += 1;
}
function updateY(){
  y += 1;
}
function updateZ(){
  z += 1;
  displayValues();
}
// 설정된 시간에 따라 interval을 가지고 반복실행됨
setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);