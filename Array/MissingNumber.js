let arr = [1,2,4,5,7];

function MissingNumber(arr){
    let n = arr.length +1;
    let realSum = (n *(n + 1))/2; // this is expected sum of the sequence of the array
    let actualSum = 0;

    for(let i=0;i < arr.length;i++){
        actualSum += arr[i];
    }

    let missNumber = realSum - actualSum;

    console.log("Missing Number is: ",missNumber);
}

MissingNumber(arr);