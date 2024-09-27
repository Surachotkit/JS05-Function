function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * ไม่มีผลลัพธ์ เพราะ ไม่มีค่าส่งไป input 
console.log(sayHi(10)); // ** alert('Hi kid') เพราะเรียกฟังชั่น ส่งค่าไป input เข้าเงื่อนไข if 