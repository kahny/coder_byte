// using regex
function ExOh(str){
  var os = str.match(/o/gi)
  var xs = str.match(/x/gi)
  if(os === null || xs === null)
    return false;
  else
    return os.length === xs.length
}
console.log(ExOh("xoxoxo"))


// not using regex

// function ExOh(str) {
//   var xCount = 0;
//   var oCount = 0;
//   for(var i=0; i<str.length; i++){
//     if(str[i]=="x" || str[i]=="X")
//       xCount +=1
//     else if(str[i]=="o" || str[i]=="O")
//       oCount +=1
//   }
//   return xCount == oCount ? true : false
// }

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
// console.log(ExOh("xoxoxo"))
