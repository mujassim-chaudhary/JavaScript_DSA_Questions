function removeSpaces(str) {
  //   str = str.replace(/\s/g, "-");
   str = myReplace(str," ", "-");

  return str;
}

console.log(removeSpaces("This is good text editors for development purposes"));

function myReplace(str, replace, separator) {
  let result = "";

  // if(separator ===undefined) separator = ",";

  for (let i = 0; i < str.length; i++) {
    let match = true;

    for (let j = 0; j < replace.length; j++) {
      if (str[i + j] !== replace[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      result += separator;
      i += replace.length - 1; // to skip the matching character
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(myReplace("hello world happy i am", "world", "dunya"));
