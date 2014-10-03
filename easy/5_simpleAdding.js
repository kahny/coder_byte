//recrusively
function SimpleAdding(num){
  if(num===1){
    return 1;
  }else{
    return num+SimpleAdding(num-1);
  }
}

console.log(SimpleAdding(9))
//returns 45


//alternative solution - updating total, not recursive


//   function SimpleAdding(num) {
//   var sum=0;
//   for (var i=1; i<=num; i++){
//      sum+=i;
//   }
//   return sum;
// }

// console.log(SimpleAdding(9))
//returns 45