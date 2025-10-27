let num = 12345;
let reverse = 0;
let temp = num;

while(temp > 0){
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log("Orignal number :" +num);
console.log("Reversed number :" +reverse);
