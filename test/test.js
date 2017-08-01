const assert = require('chai').assert;
const aritGeo = require('../aritGeo');


describe("To determine the sequence of an empty array: ", function() {
    it("should return 0 for an empty array", function() { 
        assert.equal(aritGeo(["This is Andela"]), 0);
    });

    it("should return 0 if array element is not integer", function() { 
        assert.equal(aritGeo(["This is Andela"]), 0);
    });

    it("should return 0 if the length of array is equal to 1", function() { 
        assert.equal(aritGeo(["This is Andela"]), 0);
    });

    it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        assert(aritGeo([2, 4, 6, 8, 10]), 'Arithmetic');
      });

    it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        assert(aritGeo([5, 11, 17, 23, 29, 35, 41]), 'Arithmetic');
      });

    it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        assert(aritGeo([15, 10, 5, 0, -5, -10]), 'Arithmetic');
      });

    it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        assert(aritGeo([2, 6, 18, 54, 162]), 'Geometric');
      });

    it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        assert(aritGeo([0.5, 3.5, 24.5, 171.5]), 'Geometric');
      });

    it("should return `Geometric` for [-128, 64, -32, 16, -8]", function() {
        assert(aritGeo([-128, 64, -32, 16, -8]), 'Geometric');
      });

    it("should return -1 for [1, 2, 3, 5, 8]", function() {
        assert(aritGeo([1, 2, 3, 5, 8]), -1);
      });

    it("should return `Geometric` for [1, 3, 6, 10, 15]", function() {
        assert(aritGeo([1, 3, 6, 10, 15]), -1);
      });

    it("should return `Geometric` for [1, 8, 27, 64, 125]", function() {
        assert(aritGeo([1, 8, 27, 64, 125]), -1);
      });

});