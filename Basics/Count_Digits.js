let num = 656512345;
let count = 0;
let temp = num;

if(temp === 0){
   count = 1 ;
} else{
   while(temp > 0){
    temp = Math.floor(temp / 10);
    count++;
  }
}

console.log(count);