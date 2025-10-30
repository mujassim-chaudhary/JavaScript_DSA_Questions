// function nonRepeating(str){
//     for(let i=0; i < str.length;i++){
//         let char = str[i];
//         if(str.indexOf(char) === str.lastIndexOf(char)){
//             return char;
//         }
//     }

//     return null;
// }

// without using built-in function

function nonRepeating(str){
    let freq = {};

    for(let i =0;i< str.length;i++){
        let char = str[i];
        if(freq[char]) {
            freq[char]++;
        } else{
            freq[char] = 1;
        }
    }

    for(let i=0; i< str.length;i++){
        let ch = str[i];
        if(freq[ch] === 1){
            return ch;
        }
    }

    return "No Unique character";
}

console.log(nonRepeating("abacdefb")); // c
console.log(nonRepeating("aabbdbd")); 
