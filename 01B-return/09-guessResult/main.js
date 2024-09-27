// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
//   console.log(sayHi); // * ไม่มีผลลัพธ์ เพราะ ไม่มีค่าส่งไป input 
//   console.log(sayHi(10)); // **** alert('Hi kid') เพราะเรียกฟังชั่น ส่งค่าไป input เข้าเงื่อนไข if 


  function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); // *** Hi John
  console.log(sayHi()); // **** Who are you เพราะว่า ไม่มีการส่งค่าเข้าไป name เข้าเงื่อนไข else