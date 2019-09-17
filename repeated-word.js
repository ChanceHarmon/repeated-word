const str = 'Chance is a software developer, and a Veteran.';

let strSplit = str.split(' ');

function findRepeat(strSplit) {
  let wordsChecked = {};
  for (let i = 0; i < strSplit.length; ++i) {
    let duplicate = strSplit[i];
    if (duplicate in wordsChecked) {
      return strSplit[i];
    }
    wordsChecked[duplicate] = true;
  }
  return false;
}
findRepeat(strSplit);