let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * local  Hello everybody
}

logMessage(message); 
console.log(message); // ** global Welcome to Thailand

//------------------------------------------------------------
let name = "John";

function sayHi(input) {
  console.log(name); // *** undefined เพราะว่า ใน scope function มีการประกาศตัวแปร name แล้ว แต่ประกาศหลัง console.log ไม่เห็นค่า
  name = input;
}

sayHi();
console.log(name); // **** John ดึงมาจาก global scope