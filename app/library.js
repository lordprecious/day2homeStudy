'use strict'

var file = {}

file.reverseString = function (word) {
  if(word == "") {
    return null;
  }
  var reversedWord = "";
  for(var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  if(word == reversedWord) {
    return true;
  }else 
    return reversedWord;
}


module.exports = file;
