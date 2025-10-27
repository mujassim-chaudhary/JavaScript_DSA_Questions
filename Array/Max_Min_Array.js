let arr = [1,23,45,6,89,10,100,-1];

let max = arr[0];
let min = arr[0];

for(let i=0; i <= arr.length-1;i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(`Maximum array Number ${max}`);
console.log(`Minimum array Number ${min}`);