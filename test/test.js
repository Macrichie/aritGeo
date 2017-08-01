const assert = require('chai').assert;
const aritGeo = require('../aritGeo');


describe("To determine the sequence of an array: ", ()=> {

    describe("should return 0 for an empty array", ()=> {
        it("should return 0 for an empty array", ()=> { 
            assert.equal(aritGeo([]), 0);
        });   
    });

    describe("should return 0 if the element of array is not integer", ()=> {
        it("should return 0 if the element of array is not integer", ()=> {
            assert.equal(aritGeo(["This", "is", "Andela"]), 0);
        });
    });

    describe("should return 0 if argument is not an array", ()=> {
        it("should return 0 if argument is not an array", ()=> {
            assert.equal(aritGeo(234), 0);
        });
    });

    describe("should return 0 if the length of array is 0", ()=> {
        it("should return 0 if the length of array is 0", ()=> {
            assert.equal(aritGeo([ ]), 0);
        });
    });

    describe("should return 0 if the length of array is 1", ()=> {
        it("should return 0 if the length of array is 1", ()=> {
            assert.equal(aritGeo([2]), 0);
        });
    });

    describe("should return `Arithmetic` for [2, 4, 6, 8, 10]", ()=> {
        it("should return `Arithmetic` for [2, 4, 6, 8, 10]", ()=> {
            assert.equal(aritGeo([2, 4, 6, 8, 10]), 'Arithmetic');
        });
    });

    describe("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", ()=> {
        it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", ()=> {
            assert.equal(aritGeo([5, 11, 17, 23, 29, 35, 41]), 'Arithmetic');
        });
    });

    describe("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", ()=> {
        it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", ()=> {
            assert.equal(aritGeo([15, 10, 5, 0, -5, -10]), 'Arithmetic');
        });
    });

    describe("should return `Geometric` for [2, 6, 18, 54, 162]", ()=> {
        it("should return `Geometric` for [2, 6, 18, 54, 162]", ()=> {
            assert(aritGeo([2, 6, 18, 54, 162]), 'Geometric');
        });
    });

    describe("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", ()=> {
        it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", ()=> {
            assert(aritGeo([0.5, 3.5, 24.5, 171.5]), 'Geometric')
        });
    });

    describe("should return `Geometric` for [-128, 64, -32, 16, -8]", ()=> {
        it("should return `Geometric` for [-128, 64, -32, 16, -8]", ()=> {
            assert(aritGeo([-128, 64, -32, 16, -8]), 'Geometric');
        });
    });

    describe("should return -1 for [1, 2, 3, 5, 8]", ()=> {
        it("should return -1 for [1, 2, 3, 5, 8]", ()=> {
            assert(aritGeo([1, 2, 3, 5, 8]), -1);
        });
    });

    describe("should return -1 for [1, 3, 6, 10, 15]", ()=> {
        it("should return -1 for [1, 3, 6, 10, 15]", ()=> {
            assert(aritGeo([1, 3, 6, 10, 15]), -1);
        });
    });

    describe("should return -1 for [1, 8, 27, 64, 125]", ()=> {
        it("should return -1 for [1, 8, 27, 64, 125]", ()=> {
            assert(aritGeo([1, 8, 27, 64, 125]), -1);
        });
    });

});