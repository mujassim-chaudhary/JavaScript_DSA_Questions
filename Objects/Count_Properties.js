let obj = {a:1, b:2, c:3, d:4};
let count = 0;

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        count++;
    }
}

console.log("No of Object Property : " ,count);