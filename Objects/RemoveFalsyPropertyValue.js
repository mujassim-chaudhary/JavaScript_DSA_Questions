let obj = { a: 1, b: 0, c: false, d: '', e: 'hello', f: null };

for(let key in obj){
    if(!obj[key]){
        delete obj[key];
    }
}

console.log(obj);