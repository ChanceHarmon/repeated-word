'use strict'

const str = 'Chance is a software developer, and a Veteran.';

let strSplit = str.split(' ');
console.log(strSplit);
function findRepeat(strSplit) {
  let repeatWord = [];
  for (let i = 0; i < strSplit.length; i++) {
    for (let j = 0; j < strSplit[i].length; j++) {
      if (strSplit[i] === strSplit[j]) {
        repeatWord.push(strSplit[i])
        console.log(repeatWord);
      } if (
        //not making it to this part
        strSplit[i] !== repeatWord[i]) {
        console.log(strSplit[j])
      }

      return null;
    }
  }

}

findRepeat(strSplit);



