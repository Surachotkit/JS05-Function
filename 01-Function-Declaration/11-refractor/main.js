// #1 - ใช้ if แต่ห้ามใช้ else
  function checkAge(age){
    if (age > 18){
        return true
    }if(age < 18){
        return confirm("Did parents allow you?");
    }
  }
  checkAge(5)

// #2 - ใช้ ? แทน if
  function checkAge(age){
    return age > 18 ? true : confirm("Did parents allow you?")
    
  }
  checkAge(5)

// #3 - ใช้ || แทน if
function checkAge(age){
    //  (age > 18) || (age <18) 
    return  (age < 18 ) ? true : confirm("Did parents allow you?");
}
checkAge(58)