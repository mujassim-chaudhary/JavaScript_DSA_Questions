let num = 121;
let reversed = 0;
let temp = num;

while(temp > 0){
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);  // to remove last digit
}

if(num === reversed){
    console.log(`This number is palindrom ${num}`);
} else{
    console.log(`This number is not palindrom ${num}`);
}