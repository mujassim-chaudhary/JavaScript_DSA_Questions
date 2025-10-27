function isEqual(obj1,obj2){
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length !== key2.length) return false;

    for(let key in key1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
}

let obj1 = {a:1,b:2};
let obj2  ={b:2,a:1};

console.log(isEqual(obj1,obj2));