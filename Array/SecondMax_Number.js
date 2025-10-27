function Maximum(arr){
    let max = arr[0];
    
    for(let i=0; i <= arr.length -1;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [22,3,45,66,10];

let firstMax = Maximum(arr);
console.log(firstMax+" first max ");

for(let i=0; i <= arr.length-1;i++){
    if(arr[i] == firstMax){
        arr[i] = -Infinity;
    }
}

let secondMax = Maximum(arr);
console.log(secondMax+" second max ");