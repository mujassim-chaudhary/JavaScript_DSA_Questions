function countUniques(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = true;
  }

  let key1 = [];
  for (let key in result) {
    if (result.hasOwnProperty(key)) {
      key1.push(key);
    }
  }

//   return Object.keys(result).length;

return key1.length;
}

let arr = [1, 2, 2, 3, 1, 3, 2];

console.log(countUniques(arr));
