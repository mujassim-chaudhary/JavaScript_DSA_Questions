let arr = [['a',1], ['b',2],['c', 3]];
let obj = {};

for(let [key,value] of arr){
    obj[key] = value;
}

console.log("Object key value-pairs :",obj);

let obj1 = Object.fromEntries(arr);  // direct method

console.log("object key value -pairs :",obj1);