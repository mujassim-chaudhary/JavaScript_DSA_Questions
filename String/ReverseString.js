function ReverseString(str){
    let reversed = "";

    for(let i = str.length-1; i >=0;i--){
        reversed += str[i];
    }

    return reversed;
}

let str = ReverseString("Hello");
console.log("Reversed string : ",str);