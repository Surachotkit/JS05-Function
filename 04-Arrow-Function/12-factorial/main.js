/*
6! = 6 * 5 * 4 * 3 * 2 * 1 
6! = 720
*/


let num = 1
const calFactorial = (factorial) =>{
        for(let j = 1; j<=factorial; j++){
            
            num = num * j 
            // console.log(`${factorial}*${j} = ${num}`);
            
            // console.log(`${j}*${j}*${j}++ ${factorial}= ${num}`);
            // console.log(`${factorial}`);
            // console.log(`${j}+ ${j}+ ${j} *${num}`);
            // console.log(`+++${num} * ${j} = ${num*j}`);
    
        }
        console.log(`factorial = ${num}`);
    return num
}
calFactorial(5)

