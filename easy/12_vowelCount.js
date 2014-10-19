// For this challenge you will be counting all the vowels in a string.


// using regex, edge cases if no vowels

function vowelCount(string){
  // vowels array
  var vowels = string.match(/[aeiou]/gi)
  return vowels === null ? 0 : vowels.length

}

console.log(vowelCount("Blah"));


// not using regex

// function vowelCount(string){
//   str = string.toLowerCase();
//   var vowelCount = 0;
//   for(var i=0; i<str.length; i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]== "i" || str[i]== "o" || str[i]== "u"){
//         vowelCount+=1;
//         console.log(str[i])
//     }
//   }
//   return vowelCount;
// }

// console.log(vowelCount("BLaheee"));


