function removeDuplicates(str){
    let result = "";

    for(let i =0;i < str.length;i++){
        if(result.indexOf(str[i]) === -1){
            result += str[i];
        }
    }

    return result;
}

console.log("String without Duplicates characters : ",removeDuplicates("programming"));