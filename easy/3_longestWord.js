// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  //use regex to matches all word characters in a string
  var words = sen.match(/(\w+)/g);
  var longest = '';
  for (var i=0; i < words.length; i+=1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(LongestWord("HELLO how are you!!!?"));




