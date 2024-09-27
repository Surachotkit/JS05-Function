//test push feedback branch
//update solution


// function soundOfBrid(){
//     console.log('เสียงนกกรงหัวจุกริก');
//     console.log('จก');
//     for(let i = 1; i<=10; i++){
//         console.log('กวิ้กกกกกกกก');

//     }
// }


// soundOfBrid()


function isPrime(n){
    // let n = 5 
    let isPrime = true
    for(let divider = 500; divider < n; divider++){
        if(n%divider == 0){
            isPrime = false;
            break
        }
       
    }
    if(isPrime) console.log(n);
}
isPrime(50)
isPrime(50)
isPrime(500)