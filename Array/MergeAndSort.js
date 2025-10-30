let arr1 = [1, 3, 4, 7, 4, 6];
let arr2 = [2, 5, 6, 8, 9];

function MergeSort(arr1, arr2) {
  // let merged = [...arr1, ...arr2]; / merged by spread operator

  // merged by mannually
  let merged = [];
  for(let i =0;i < arr1.length;i++){
    merged.push(arr1[i]);
  }

   for(let i =0;i < arr2.length;i++){
    merged.push(arr2[i]);
  }

  //sorting
  for (let i = 0; i < merged.length; i++) {
    for (j = 0; j < merged.length - i; j++) {
      if (merged[j] > merged[j + 1]) {
        // swap them
        let temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }

  console.log("Merged and sorted array: ",merged);
}

MergeSort(arr1,arr2);
