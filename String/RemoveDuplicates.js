function removeDuplicates(str){
    let result = "";

    for(let i =0;i < str.length;i++){
        // if(result.indexOf(str[i]) === -1){
        //     result += str[i];  // output = progamin
        // }

        if(myIndexOF(result,str[i]) === -1){
            result += str[i];
        }
    }

    return result;
}

console.log("String without Duplicates characters : ",removeDuplicates("programming"));

function myIndexOF(str,search){

    for(let i = 0;i < str.length ;i++){
        let match = true;

        for(let j =0; j < search.length;j++){
            if(str[i+ j] !== search[j]){
               match = false;
               break;
            }
        }

        if(match){
            return i;
        }
    }

    return -1;
}


console.log(myIndexOF("this ismy love for javascript","love"));