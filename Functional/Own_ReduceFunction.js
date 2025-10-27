function myReduce(array,callback,initialValue){
  let accumulator = initialValue;
  let startIndex = 0;

  if(initialValue === undefined){
    accumulator = array[0];
    startIndex = 1;
  }

  for(let i = startIndex;i < array.length;i++){
    accumulator = callback(accumulator,array[i],i,array);
  }

  return accumulator;
}

let arr  = [1,2,3,4,5];
let arr2 = [[1,2],[3,4],[5,6]];

let sum = myReduce(arr,(acc,num) => acc + num,0);

let flat = myReduce(arr2,(acc,num) => acc.concat(num),[])

console.log(sum);
console.log(flat);