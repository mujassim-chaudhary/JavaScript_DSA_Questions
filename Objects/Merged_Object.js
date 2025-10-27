let obj1 = {a:1, b:2, c:3};
let obj2 = {d:4, e:5,f:6};

let merged  ={};

for(let key in obj1){
    if(obj1.hasOwnProperty(key)){
        merged[key] = obj1[key];
    }
}

for(let key in obj2){
    if(obj2.hasOwnProperty(key)){
        merged[key] = obj2[key];
    }
}

console.log(merged);