function debounce(fn,delay){
    let timerId;

    return function (...args){
        clearTimeout(timerId);

        timerId = setTimeout(() =>{
            fn.apply(this, args);

        },delay);
    }
}

function hello(){
    console.log("This is a debounce function :");
}

debounce(hello,500);
