function wordsFrequency(string){
    let words = string.toLowerCase().split(/\W+/);
    let freq = {};

    for(let i =0;i < words.length;i++){
        let word = words[i];

        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

let string ='This is very good Javascript questions. This is best and good';

console.log(wordsFrequency(string));