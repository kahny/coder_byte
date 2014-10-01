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




