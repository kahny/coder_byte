// using regex

function SimpleSymbols(str) {
  var SimpleSymbl = false;
  for (var i=0; i<str.length; i++){
    if( /[a-z]/.test(str[i])){
      console.log(str[i])
      if(str[i-1]=== "+" && str[i+1]==="+"){
        console.log(str[i-1])
        console.log(str[i+1])
         SimpleSymbl= true;
      }
      else{
         return false;
      }
    }
  }
  return SimpleSymbl;
}

console.log(SimpleSymbols("f++d+"))

