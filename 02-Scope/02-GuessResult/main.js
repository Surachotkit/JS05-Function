let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi();
//Hello John เพราะว่า สามารถดึงตัวแปร phrase ที่เป็น global scope 
