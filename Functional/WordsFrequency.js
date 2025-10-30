function wordsFrequency(string){
    // let words = string.toLowerCase().split(/\W+/);

    let words = mySplit(string.toLowerCase()," ");

    let freq = {};

    for(let i =0;i < words.length;i++){
        let word = words[i];

        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

let string ='This is very good Javascript questions. This is best and good';

console.log(wordsFrequency(string));

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