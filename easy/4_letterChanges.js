function LetterChanges(str) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var modifiedStr = []
  // code goes here
      for(var i=0; i<str.length; i++){
        if(alphabet.indexOf(str[i])>=0){
          console.log("indexOf", alphabet.indexOf(str[i]))
           modifiedStr.push(alphabet[alphabet.indexOf(str[i])+1])
           console.log('alphabet.indexOf(str[i])+1', alphabet[alphabet.indexOf(str[i])+1])
        }
        else{
          modifiedStr.push(str[i])
          console.log('not in alphabet', str[i])
        }
      }
  return modifiedStr;

}

console.log(LetterChanges("argument goes here"));


















