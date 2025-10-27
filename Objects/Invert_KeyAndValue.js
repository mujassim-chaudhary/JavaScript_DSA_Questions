let obj = {a:1,b:2,c:3};
let inverted  ={};

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        inverted[obj[key]] = key;
    }
}

console.log(inverted);