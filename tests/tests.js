
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

describe("words()", function() {
  it("counts one word", function() {
    var expectedCounts = { word: 1 };
    expect(myApp.words("word")).toEqual(expectedCounts);
  });

  it("counts one of each", function() {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(myApp.words("one of each")).toEqual(expectedCounts);
  });

  it("counts multiple occurrences", function() {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(myApp.words("one fish two fish red fish blue fish")).toEqual(expectedCounts);
  });

  it("includes punctuation", function() {
    var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    expect(myApp.words("car : carpet as java : javascript!!&@$%^&")).toEqual(expectedCounts);
  });

  it("includes numbers", function() {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(myApp.words("testing 1 2 testing")).toEqual(expectedCounts);
  });

  it("respects case", function() {
    var expectedCounts = { go: 1, Go:1, GO:1 };
    expect(myApp.words("go Go GO")).toEqual(expectedCounts);
  });

  it("counts properly international characters", function() {
    var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
    expect(myApp.words("¡Hola! ¿Qué tal? Привет!")).toEqual(expectedCounts);
  });

  it("counts multiline", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(myApp.words("hello\nworld")).toEqual(expectedCounts);
  });

  it("counts tabs", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(myApp.words("hello\tworld")).toEqual(expectedCounts);
  });

  it("counts multiple spaces as one", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(myApp.words("hello  world")).toEqual(expectedCounts);
  });

  it("handles properties that exist on Object’s prototype", function() {
    var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1};
    expect(myApp.words("reserved words like prototype and toString ok?")).toEqual(expectedCounts);
  });
});
  

