'use strict'
function aritGeo(arr) { 
    let diff = arr[1] - arr[0],
        ratio = arr[1] / arr[0],

        arith = true,
        geo = true,
        i;

    if(arr == null || !Array.isArray(arr)) {
        return 0;
    }

    let length = arr.length;
    if(length <= 1){
        return 0;
    }

    for(i = 0; i < arr.length - 1; i++) {
    
        if( arr[i + 1] - arr[i] != diff ) {
            arith = false;
        }

        if(arr[i + 1] / ratio != arr[i]) {
            geo = false;
        }      
    }
// check if array elements are integers
    if (isNaN(arr[i])) {
        return 0;
    }

    if(arith === true) {
        return "arithmetic";
    } else if(geo === true) {
        return" geometric";
    } else {
        return -1;
    }
}

// console.log(aritGeo([10, 30, 90, 270, 810, 2430]));
// console.log(aritGeo([3,9,15,21,27,28]));
// console.log(aritGeo([3,9,15,21,27]));
// console.log(aritGeo([4,2,1,0.5]));
// console.log(aritGeo([3]));
// console.log(aritGeo(2));
// console.log(aritGeo([3, -2, 1]));
// console.log(aritGeo([]));
// console.log(aritGeo([3, 54, 31, -2]));
// console.log(aritGeo(["This","is","adela"]));
// console.log(aritGeo([15, 10, 5, 0, -5, -10]));
// console.log(aritGeo([-128, 64, -32, 16, -8]));

module.exports = aritGeo;