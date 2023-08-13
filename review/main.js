/* เขียนฟังชั่น 2 แบบ หลัก
1. Function Delaration / Name Function มีชื่อ
2. Function Expression / มักถูกเขียนในรูปของ Anomymous Function 

Function Delaration
*/
/* 
การใช้งานฟังชั่น ต้อง
 1.ประกาศฟังชั่น => กำหนดชื่อ , input(parameter) 
 2.เรียกใช้งาน 
*/
// 1.Define  ประกาศฟังชั่น* ออกแบบ
function sayHi (name,lastName){  //parameter ใช้เหมือนตัวแปรได้
    console.log(`Hello ${name} ${lastName}`);
}

// 2. Call  เรียกใช้งาน
sayHi("John","Doe");
sayHi('Pavit',"Pimchanangul");


//concap return**
/* 
เอาตัวแปรมารับได้

*/
//Return Value  ผลลัพธ์ที่ได้จก run function จนเสร็จ
// add(5,6) == Return Value , Function Result [ผลลัพธ์จากการรันฟังชั่น]
function add(x,y){
    let result = x+y
    return result
}

add(5,6); //ถ้ายังทำงานไม่เสร็จ มันจะไม่ทำงานบรรทัดถัดไป --> ต้องรอฟังชั่น add 10วิ เสร็จก่อน
// เมื่อ add ทำเสร็จ ตัวมันจะเท่ากับที่มัน return 


let r = add(5,6) // reusable result 
console.log(r);


console.log(add(5,6)); //one time use  || runtime 1 hr ||  จะใช้ครั้งนึง ต้องคิดใหม่ครั้งนึง



function isEven(n){
    if(n%2 == 0){//ถ้าเป็นเลขคู่ ผลลัพธ์ต้องเป็นเศษ 0
        return true;
    } 
    else{
        return false;
        }
//-----------**สามารถเขียนแบบนี้ได้-------------
    return n % 2 == 0;  // 6%2 === 0 (true)  
//------------------------------------------
    if(n%2 == 0){// if else ย่อ
        return true;
    } 
        return false;
}
console.log(isEven(5));

