
// intersection by filter and includes methods
function interSection(arr1,arr2){
    let result = arr1.filter((item) => arr2.includes(item));

    return result;
}

let arr1 = [1,2,3,5];
let arr2 = [2,1,6,7,5];

console.log(interSection(arr1,arr2));


// intersection by mannually
function interSection2(arr1,arr2){
    let result = [];

    for(let i =0; i < arr1.length;i++){
        for(let j =0 ; j < arr2.length;j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
}

 

console.log(interSection2(arr1,arr2));