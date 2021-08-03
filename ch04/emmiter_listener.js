var events = require('events');
// 이벤트는 events 모듈에 포함된 EventEmitter 객체를 사용해 발생시킬 수 있음.
function Account() {
  this.balance = 0;
  // 1. 생성한 객체에서 직접 사용하려면 events.EventEmitter.call(this)를 호출해 emitter 기능을 상속받고
  events.EventEmitter.call(this); 
  this.deposit = function(amount){
    this.balance += amount;
    this.emit('balanceChanged');
  };
  this.withdraw = function(amount){
    this.balance -= amount;
    this.emit('balanceChanged');
  };
}
// 2. 객체 프로토타입에 events.EventEmitter.prototype을 추가해야 한다.
Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance(){
  console.log("Acount balance: $%d", this.balance);
}
function checkOverdraw(){
  if (this.balance < 0){
    console.log("Acount overdrawn!!!");
  }
}
function checkGoal(acc, goal){
  if (acc.balance > goal){
    console.log("Goal Achieved!!!");
  }
}
var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function(){
  checkGoal(this, 1000);
});
/*
addListener(event, callback): 객체 리스너에 콜백 함수 추가. event가 실행될 때마다 callback이 이벤트 큐에 추가된다.
.on : addListener와 동일
.once : event가 최초 실행될 때만 콜백함수를 이벤트 큐에 추가.
*/
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

/*
이벤트 리스너는 매우 편리한 기능을 제공하지만, 오버헤드가 존재하기 때문에 필요한 경우에만 사용
EventEmitter 객체에 리스너를 관리하기 위한 핼퍼 함수들이 존자한다.
listeners(eventName) : 이벤트에 추가된 리스너 함수 배열 반환
.setMaxListeners(n) : n보다 많은 리스너가 추가되려고 할 때 경고 트리거. 기본값은 10
.removeListener(event, callback) : event에 등록된 콜백함수 제거
*/