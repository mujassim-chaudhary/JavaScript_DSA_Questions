function countUniques(arr){
    let result = {};

    for(let i =0; i<arr.length;i++){
        result[arr[i]] = true;
    }

    return Object.keys(result).length;
}

let arr = [1,2,2,3,1,3,2];

console.log(countUniques(arr));