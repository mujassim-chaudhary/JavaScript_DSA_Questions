let n = 10;
let n1 = 0;
let n2 = 1;
let nextTerm;

console.log("Fibonacci series : ");

for(let i = 1;i <= n; i++){
    console.log(n1);  // print current term
    nextTerm = n1 + n2; // next term
    n1 = n2; // shift term
    n2 = nextTerm;
}