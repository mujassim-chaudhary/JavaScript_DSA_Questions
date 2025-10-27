let arr = [1,2,3,2,4,1,5];

function Remove(arr){
    let ans = [];
    
    for(let i=0; i < arr.length;i++){
        if(!ans.includes(arr[i])){
            ans.push(arr[i]);
        }
    }
    console.log("Array without duplicates: ",ans);
}

Remove(arr);