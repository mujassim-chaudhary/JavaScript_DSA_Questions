function isAnagrams(str1,str2){
    // first removes all spaces and convert into lower case
     str1 = str1.replace(/\s/g,'').toLowerCase();
     str2 = str2.replace(/\s/g,'').toLowerCase();
     let bool = false;

     // check the length
     if(str1.length !== str2.length){
        return bool;
     }
     if(str1.split("").sort().join("") === str2.split("").sort().join("")){
         bool = true;
     }
     return bool;
}

console.log(isAnagrams("listen","slient"));
console.log(isAnagrams('Mujassim','Chaudhary'))