let num = 12345;
let sum = 0;
let temp = num;


while(temp > 0){
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
    
}


console.log(sum);