function countCharacters(str){
    let count = {};  // empty object

    for(let i = 0; i < str.length;i++){
        let char = str[i];

        if(count[char]){
            count[char]++;
        } else{
            count[char] = 1;
        }
    }
    return  count;
}

let result = countCharacters("Hello");

console.log("Characters counts :",result);