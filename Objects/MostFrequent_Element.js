let arr = [1,2,3,1,2,3,4,5,2,2,6];
let freq = {};

let maxCount = 0;
let mostFrequentElement;

for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;

    if(freq[num] > maxCount){
        maxCount = freq[num];
        mostFrequentElement = num;
    }
}

console.log("Most frequent element in array is : ", mostFrequentElement);