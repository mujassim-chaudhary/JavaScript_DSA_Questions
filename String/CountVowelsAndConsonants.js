//this function has some built-in method
// function countVowelsAndConsonants(str) {
//   str = str.toLowerCase(); // first convert into lower case

//   let vowels = "aeiou";

//   let countVowels = 0;
//   let countConsonants = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (/[a-z]/.test(str[i])) {  // to check the alphabets only
//       if (vowels.includes(str[i])) {
//         countVowels++;
//       } else {
//         countConsonants++;
//       }
//     }
//   }

//   return { Vowels: countVowels, Consonants: countConsonants };
// }

// lets try without using built-in method
function countVowelsAndConsonants(str) {
  let countConsonants = 0;
  let countVowels = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if((ch >= 'a' && ch >= 'z') || (ch >= 'A' && ch >= 'Z')){
      if(ch == 'a' || ch =='A' ||
         ch == 'e' || ch =='E' ||
         ch == 'i' || ch =='I' ||
         ch == 'o' || ch =='O' ||
         ch == 'u' || ch =='U'
      ){
        countVowels++;
      } else{
        countConsonants++;
      }
    }
  }
  return {Vowels:countVowels,Consonants:countConsonants};
}

let result = countVowelsAndConsonants("Helllo World! Mujassim");

console.log(`Vowels : ${result.Vowels} , Consonants : ${result.Consonants}`);
