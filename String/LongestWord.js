function longestWord(str){
    let words = str.split(" ");//first convert into words array
    let longestWord = "";

    for(let i =0; i < words.length;i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }

    return longestWord;
}

let result = longestWord("I am enjoying to do javascript programming!");
console.log(result);