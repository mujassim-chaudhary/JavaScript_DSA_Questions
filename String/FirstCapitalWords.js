function capitalizedWords(str){
    let words = str.split(" "); // splite the string by the space and convert into 2d array

    for(let i=0; i < words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ") ; // convert the array into string
}

let result = capitalizedWords("Hello world this is me!");
console.log(result);