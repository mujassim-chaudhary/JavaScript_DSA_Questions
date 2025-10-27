function reverseString(str){
    let reversed = "";

    for(let i = str.length-1; i >=0;i--){
        reversed += str[i];
    }

    return reversed;
}

let str = 'Mujassim';
let reversed = reverseString(str);

if(str === reversed){
    console.log("This is palindrom string :",reversed);
} else{
    console.log("This string is not palindrom :",reversed);
}