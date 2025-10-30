function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  
  if (Array.isArray(obj)) {
     return obj.map(item => deepClone(item));

    // return myMap(obj,(item) => deepClone(item));
  }

  
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copied = deepClone(original);

console.log(copied); 
console.log(copied.b === original.b); // tell copied obj is different from orignal


// myMap function
function myMap(array, callback){
    let result = []; // stores the transformed values

    for(let i =0; i < array.length;i++){
        if(array.hasOwnProperty(i)){
            result.push(callback(array[i],i,array));
        }
    }

    return result;

}