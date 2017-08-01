const assert = require('chai').assert;
const aritGeo = require('../aritGeo');


describe("To determine the sequence of an empty array: ", function() {
    it("should return 0 for an empty array", function() { 
        assert.equal(aritGeo(["This is Andela"]), 0);
    });

    it("should return 0 if array element is not integer", function() { 
        assert.equal(aritGeo(["This is Andela"]), 0);
    });
});