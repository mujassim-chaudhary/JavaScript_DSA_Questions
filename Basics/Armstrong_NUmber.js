let num = 183;
let sum = 0;
let temp = num;

let digits = temp.toString().length;

while(temp > 0){
    let value = temp % 10;
    sum += Math.pow(value, digits);
    temp = Math.floor(temp /10);  // to remove last digits
}

if(sum == num){
    console.log("This number is Armstrong : " +num);
} else{
    console.log("This number is not Armstrong :"+num);
}