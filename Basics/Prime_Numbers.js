console.log("prime number 1 to 100 : ");

for(let num = 2; num <= 100; num++){
    let isPrime = true;

    for(let i = 2; i <= num-1; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(num);
    }
}     