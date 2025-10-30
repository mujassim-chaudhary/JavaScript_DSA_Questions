 
        // this function code has some built-in method 
// function isAnagrams(str1,str2){
//     // first removes all spaces and convert into lower case
//      str1 = str1.replace(/\s/g,'').toLowerCase();
//      str2 = str2.replace(/\s/g,'').toLowerCase();
//      let bool = false;

//      // check the length
//      if(str1.length !== str2.length){
//         return bool;
//      }
//      if(str1.split("").sort().join("") === str2.split("").sort().join("")){
//          bool = true;
//      }
//      return bool;
// }

// this is mannually
function isAnagrams(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }

    let count = {}; // to store the frequency of each character
    for(let i=0;i < str1.length;i++){
        let char = str1[i];
        if(count[char]){
            count[char]++;
        } else{
            count[char] = 1;
        }
    }
        
    // to decrease the count frequency
    for(let i=0;i < str2.length;i++){
        let char = str2[i];
        if(!count[char]){
            return false;
        } 
        count[char]--;
    }

    // to check the count length
    for(let key in count){
        if(count[key] !== 0) return false;
    }

    return true;
}


console.log(isAnagrams("listen","slient"));
console.log(isAnagrams('Mujassim','Chaudhary'))