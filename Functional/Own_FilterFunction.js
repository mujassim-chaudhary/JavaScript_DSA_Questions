function myFilter(arr,callback){
    let result = [];

    for(let i =0;i <arr.length;i++){
        if(callback(arr[i],i,arr)){
            result.push(arr[i]);
        }
    }

    return result;
}

let arr = [1,23,32,34,12,20];

let filter = myFilter(arr,(val) => val > 20);

console.log(filter);
