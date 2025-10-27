
function factorial(f){
    if(f === 0 || f ===1){
        return 1;
    } else{
        return f * factorial(f - 1);
    }
}


let num = 5;
let fact = factorial(num);
console.log(fact);