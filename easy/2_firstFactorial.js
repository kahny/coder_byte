//recursively
function FirstFactorial(num) {
  if(num<0){
    return -1;
  }else if(num==0){
    return 1;
  }else{
    return num * FirstFactorial(num-1);
  }
}

console.log(FirstFactorial(4));
//returns 24

