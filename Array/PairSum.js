let arr = [1,2,3,4,5,6,7,8,0];
let target = 8;

function TargetSum(arr,target){
    console.log("All pairs : ",target);

    for(let i=0 ;i <arr.length;i++){
        for(let j = i+1; j< arr.length;j++){
            if(arr[i] + arr[j]  === target){
                console.log(`(${arr[i]},${arr[j]})`);
            }
        }
    }
}

TargetSum(arr,target);