function promiseALl(Promises){
    return new Promise((resolve,reject) =>{
        let result = [];
        let completed = 0;

        Promises.forEach((promise,index) =>{
            Promise.resolve(promise)  
            .then((value) =>{
                result[index] = value;
                completed++;

                if(completed === Promises.length){
                    resolve(result);
                }
            })
            .catch((err) =>{
                reject(err);
            })
        })

        if(Promises.length === 0){
            resolve([]);
        }
    })

}

let p1 = Promise.resolve(10);
let p2 = 23;

let p3 = new Promise((resolve) => resolve(100));

promiseALl([p1,p2,p3])
.then((result) =>{
    console.log("All promises are resolved :",result);
})
.catch((err) =>{
    console.log("Aleast one promise is reject :",err);
})