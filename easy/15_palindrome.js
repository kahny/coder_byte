function Palindrome(str) {
  var reverse = []
  console.log(str.length-1)
      for(var i=(str.length-1); i>=0; i--){
        console.log(i)
        reverse.push(str[i]);
      }
      console.log(reverse)
  return reverse.join("") === str ? true : false;
}

console.log(Palindrome("never odd or even"))