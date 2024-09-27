const showModal = alert;
showModal("Execute modal"); // * alert("Execute modal") เพราะเอาฟังชั่น assign ให้ตัวแปร

const showModal = alert();
showModal("Execute modal"); // ** null เพราะ เรียกใช้ฟังชั่นต้องใส่ค่าเข้าไปใน ()


