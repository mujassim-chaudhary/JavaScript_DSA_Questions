let arr1 = [1, 3, 4, 7, 4, 6];
let arr2 = [2, 5, 6, 8, 9];

function MergeSort(arr1, arr2) {
  let merged = [...arr1, ...arr2];

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
