
/*
2000 - 2020
ปี 2000 มีกี่วัน 365
ปี 2001 มีกี่วัน 365
ปี 365
...
365
** 4 ปีครั้ง จะมี 366 วัน

*/

/*
1.นับอายุเป็นจำนวนวัน / นับจากปีเกิด

2.ไปถึงวันที่ 31/12/2020
*/

const year = (YourAge) => {

    let limitYear = 2020
    let durationYear = limitYear - YourAge + 1 // 27
    console.log(`duration is: ${durationYear} year`)
    let totalDayOfYear = 365
    let totalDayOfYearGetFebuary = 366
    let sumDayOfYear = 0

    for(let i = 0; i <= durationYear; i++){  // i = numberYear 
        if(i % 4 == 0){
            sumDayOfYear = sumDayOfYear + totalDayOfYearGetFebuary
        }else{
            sumDayOfYear = sumDayOfYear + totalDayOfYear
        }
    }
    // จำนวนวันทั้งหมด = จำนวนปี * 365 
    let countDay = durationYear * totalDayOfYear
    console.log(`countDay not get Febuary : ${countDay} day`)
    console.log(`countDay get Febuary : ${sumDayOfYear} day`)
    return sumDayOfYear
}

year(1994)
// console.log(year(1994));
// const getMyDayOfYear =  year(1994)
// console.log(getMyDayOfYear);












