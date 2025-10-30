function capitalizedWords(str){
     // let words = str.split(" "); // splite the string by the space and convert into 2d array
      
     let words = mySplit(str," "); // this is mannual build split method

    for(let i=0; i < words.length;i++){
        words[i] = words[i][0].toUpperCase() + mySlice(words[i],1);
    }

    return myJoin(words," ") ; // convert the array into string
}

let result = capitalizedWords("Hello world this is me!");
console.log(result);

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

// console.log(mySplit("this is very good question"," "));

function mySlice(str,start,end){
    let result = "";

    // to handel the negative index
   
    if(end === undefined) end = str.length;
    if(end < 0) end = end + str.length;

    //
    if(start < 0) start = 0;
    if(end > str.length) end = str.length;
    if(start >= end) return "";

    //loop 
    for(let i =start;i<end;i++){
        result += str[i];
    }
     
    return result;


}

// console.log(mySlice("Hello world!",-2,7));

function myJoin(arr,separator){
    let result = "";

    // default separator
    if(separator === undefined) separator = ",";

    for(let i =0; i< arr.length;i++){

        result += arr[i];

        if(i < arr.length -1){
            result += separator;
        }
    }

    return result;
}

// console.log(myJoin(["Hello","Mujassim","Sandeep"]," "));