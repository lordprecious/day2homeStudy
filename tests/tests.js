
'use strict';

var chai = require('jasmine');
//var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myApp.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myApp.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myApp.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myApp.reverseString('civic')).toEqual(true);
    });

    it("should return true for `lol`", function() {
      expect(myApp.reverseString('lol')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `aledna` for `andela`", function() {
      expect(myApp.reverseString('andela')).toEqual('aledna');
    });

    it("should return `suoicerp` for `precious`", function() {
      expect(myApp.reverseString('precious')).toEqual('suoicerp');
    });

    it("should return `skoob` for `books`", function() {
      expect(myApp.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myApp.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myApp.reverseString('misc')).toEqual('csim');
    });

  });

});
  
