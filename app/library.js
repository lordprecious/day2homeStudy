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

file.words = function (input) {
  var wordsArray = [];
  wordsArray = input.split(" ");
  var countArray = [];
  var output = {};
  
  for(var i = 0; i < wordsArray.length; i++) {
    var currentWord = wordsArray[i];
    if(typeof(countArray[currentWord]) === 'undefined') {
      countArray[currentWord] = 1;
    }
    else{
      countArray[currentWord] += 1;
    }
  }
  for(var item in countArray){
    output[item] = countArray[item];
    //console.log(item + ': ' + countArray[item]);
  }
  return output;
}


module.exports = file;
