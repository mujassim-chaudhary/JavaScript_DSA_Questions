let arr = [1,2,3,2,4,1,5];

function Remove(arr){
    let ans = [];
    let uniqueElement = {};
    for(let i=0; i < arr.length;i++){
        let element = arr[i];
        
        if(uniqueElement[element] !== true){
            ans.push(arr[i]);
            uniqueElement[element] = true;
        }
    }
    console.log("Array without duplicates: ",ans);
}

Remove(arr);