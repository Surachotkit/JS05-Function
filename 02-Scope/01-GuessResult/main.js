let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi();// Hi Pete เพราะว่า สามารถดึงตัวแปร name ที่เป็น global scope มาใช้งานได้ 