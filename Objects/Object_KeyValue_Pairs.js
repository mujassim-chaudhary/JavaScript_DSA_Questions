let obj = {a:1,b:2,c:3,d:4};
let arr =[];


for(let [key,value] in obj){
    if(obj.hasOwnProperty(key)){
        arr.push([key,obj[key]]);
    }
}

console.log(arr);