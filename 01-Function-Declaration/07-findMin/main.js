//ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
//ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง


function findMin(number1, number2){
    let result;

    if(number1 < number2){
        result = number1 - 1
    }else{
        result = number2 - 1
    }
    return result;
}

const min = findMin(400,50); 
console.log(`Min is: ${min}`)