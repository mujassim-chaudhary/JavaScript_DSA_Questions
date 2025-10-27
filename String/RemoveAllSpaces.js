function removeSpaces(str){
    str = str.replace(/\s/g,'-');

    return str;
}

console.log(removeSpaces("This is good text editors for development purposes"));