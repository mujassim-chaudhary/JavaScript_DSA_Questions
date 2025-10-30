function longestWord(str){
    let words = mySplit(str," ");//first convert into words array
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


// mannual split method
function mySplit(str,seprator){
    let result = [];
    let word = "";

    for(let i=0;i < str.length;i++){
        let ch = str[i];

        if(ch === seprator){
            result[result.length] = word;
            word = "";
        } else{
            word += ch;
        }
    }

    result[result.length] = word;

    return result;
}