// solution using regex
function LetterCapitalize(str){
  return str.replace(/\b[a-z]/g, function(x){
    return x.toUpperCase()
  })
}
console.log(LetterCapitalize("hello there"))


/*
//alternative solution - using arrays
function LetterCapitalize(str) {
  var wordsArray = str.split(' ');
  var newWords = []
  for (index in wordsArray){
    newWords.push(wordsArray[index][0].toUpperCase()+wordsArray[index].slice(1))
  }
  return newWords.join(' ');
}


console.log(LetterCapitalize("hello there"))
*/