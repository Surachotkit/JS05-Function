const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // undefined เพราะไม่มี return function

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **28.26 เพราะ input r = 3 3**2 = 9*3.14 = 28.26