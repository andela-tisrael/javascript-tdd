'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test the sum of prime numbers within a given number", function() {
  it("should return 0 as the sum of prime of 1", function() {
    assert(lib.sumOfPrimes(0) == 0);
  });

  it("should return 10 as the sum of prime of 5", function() {
    assert(lib.sumOfPrimes(5) == 10);
  });

  it("should return 17 as the sum of prime of 10", function() {
    assert(lib.sumOfPrimes(10)==17);
  });

  it("should return 41 as the sum of prime of 15", function() {
    assert(lib.sumOfPrimes(15)==41);
  });

  it("should return 77 as the sum of prime of 20", function() {
    assert(lib.sumOfPrimes(20)==77);
  });


  it("should return a value", function() {
    assert(lib.sumOfPrimes(10)!= undefined);
  });

  it("should return 'Cannot Calculate sum of prime for negative numbers'", function() {
    assert(lib.sumOfPrimes(-1) == "Cannot Calculate sum of prime for negative numbers");
  });

  it("should return 'Cannot Calculate sum of prime for negative numbers'", function() {
    assert(lib.sumOfPrimes(-100) == "Cannot Calculate sum of prime for negative numbers");
  });

  it("should return 'Invalid Input' when the input value is undefined", function() {
    assert(lib.sumOfPrimes(A) == "Invalid Input");
    });

  it("should return 'Invalid Input' for string input", function() {
    assert(lib.sumOfPrimes("A") == "Invalid Input");
  });

});