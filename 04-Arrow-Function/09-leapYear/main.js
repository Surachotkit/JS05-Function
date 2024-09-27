const isLeapYear = (year) => {

    
// #2
    if(year % 400 == 0){
    return true
    }
    if(year % 100 == 0){
        return false
    }
    if(year % 4 == 0){
        return true
    }
    return false


}
console.log(isLeapYear(400));