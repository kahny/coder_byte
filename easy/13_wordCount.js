// no edge case, all words split by one space


function WordCount(str) {
  return str.split(" ").length
}

console.log(WordCount("Blah bah blah"))

// edge case is if there is a trailing space..check to see what is the most efficient possible solution for this


// function WordCount(str) {

//   var words = str.split(" ")
//   var numWords = words.length

//   // addressing the extra spaces
//   var trailingSpaces = 0;
//     for (var i =0; i<words.length; i++){
//       if(words[i]==""){
//         trailingSpaces+=1
//       }
//     }

//   return numWords - trailingSpaces
// }

// console.log(WordCount("blah blah blah"))


