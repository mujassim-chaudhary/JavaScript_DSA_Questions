function throttle(fn,delay){
    let lastCall = 0;

    return function (...args){
        let now = Date.now();

        if(now - lastCall >= delay){
            lastCall = now;
            fn.apply(this,args);
        }
    }
}

function apiCall(){
    console.log("api is calling :" , new Date().toLocaleTimeString());
}

let resultFunction = throttle(apiCall,2000);

setInterval(resultFunction,500);