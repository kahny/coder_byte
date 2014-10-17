// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

//most concise
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

console.log(FirstReverse("dogs"));


//not using .reverse method

/*function FirstReverse(str) {
  var reverseArray = []
      for(var i=str.length-1; i>=0; i--){
        reverseArray.push(str[i])
      }
  var reversed = reverseArray.join('')
  return reversed;
}

console.log(FirstReverse("dogs"));
*/