let arr = [1,3,5,7,9,10];

function Reverse(arr){
    let ans = [];

    for(let i = arr.length-1;i >=0;i--){
        ans.push(arr[i]);
    }

    return ans;
}

let ans = Reverse(arr);

console.log("Reversed array:",ans); //in one line array

console.log("Reversed Array");
for(let i=0;i <= ans.length-1;i++){ // standard form of print array
    console.log(ans[i]);
}