let arr = [15, 5, 20, 15, 20, 14, 5, 15, 15];

let count = {};

for (let i = 0; i < arr.length-1; i++) {
  let element = arr[i];
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log("Element counts:",count);
