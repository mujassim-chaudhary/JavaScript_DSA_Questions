let array = [
    {name:'Mujassim',age:20},
    {name:'Aasim',age:16},
    {name:'Vishal',age:25},
    {name:'Aman',age:23}
]

console.log(array);

// sort by age
// array.sort((a,b) => a.age - b.age);  ascending order mai sort hoga
// console.log(array);

//sort by name or string

array.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
console.log(array);
 
