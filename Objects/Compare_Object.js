function isEqual(obj1, obj2) {
  // let key1 = Object.keys(obj1); this is built-in method to get the keys from object
  // let key2 = Object.keys(obj2);

  // to get the manually
  let key1 = [];
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      key1.push(key);
    }
  }

  let key2 = [];
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      key2.push(key);
    }
  }

  if (key1.length !== key2.length) return false;

  for (let key in key1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 2, a: 1 };

console.log(isEqual(obj1, obj2));
