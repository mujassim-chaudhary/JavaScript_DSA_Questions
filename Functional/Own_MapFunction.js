function myMap(array, callback){
    let result = []; // stores the transformed values

    for(let i =0; i < array.length;i++){
        if(array.hasOwnProperty(i)){
            result.push(callback(array[i],i,array));
        }
    }

    return result;

}

let arr =  [1,2,3,4,5];

let double = myMap(arr,(val,index) =>{
    console.log(index);
    return val*2;
})

console.log(arr);
console.log(double);