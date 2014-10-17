// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


//solving using regex and unicode
function LetterChanges(str){
  return str.replace(/[a-z]/gi, function(x){
    var next = String.fromCharCode(x.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase();
    }
    return x == 'z' ? 'A' : x == 'Z' ? 'A' : next;
  })
}

console.log(LetterChanges('Argument Goes here'))

//solving using alphabet array
// function LetterChanges(str) {
//   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//   var vowels = ['a', 'e', 'i', 'o', 'u']
//   var modifiedStr = []

//   for(var i=0; i<str.length; i++){
//     if(alphabet.indexOf((str[i]).toLowerCase())>=0){
//       if(str[i]=="z"){
//         modifiedStr.push("a")
//       }else if(vowels.indexOf(alphabet[alphabet.indexOf((str[i]).toLowerCase())+1])>=0){
//         modifiedStr.push((alphabet[alphabet.indexOf(str[i])+1]).toUpperCase())
//       }else{
//         // console.log("indexOf", alphabet.indexOf(str[i].toLowerCase()))
//         modifiedStr.push(alphabet[alphabet.indexOf(str[i].toLowerCase())+1])
//         // console.log('alphabet.indexOf(str[i])+1', alphabet[alphabet.indexOf(str[i])+1])
//       }
//     }
//     else{
//       modifiedStr.push(str[i])
//       // console.log('not in alphabet', str[i])
//     }
//   }
// return modifiedStr.join('');

// }

// console.log(LetterChanges('Argument goes here'))


















