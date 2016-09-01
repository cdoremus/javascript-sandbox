const assert = require('../assert');

/**
 * Observations on 'this' behavior using apply() and call() on a function in an object or 'this' context
 *  and when the function is used as a constructor.
 *
 * When addArgs() is called using apply() or call() on object instances, the 'this' context refers to the object.
 * The same thing happens when addArgs() is called as a constructor using 'new'. In that case, the 'this' is
 * the newly constructed object.
 *
 * However, if addArgs() is called as a global function, then 'this' refers to the global object.
 */
function addArgs() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    // 'this' depends on the context
    this.result = result;
}

// setup 2 object contexts
var addArgs1 = {};
var addArgs2 = {};
// using the function in a 'new' or constructor context
var addArgs3 = new addArgs(5,6,7,8,9);
// addArgs() called in global scope
addArgs(5,6,7,8,9,10);

// use apply() or call() to addach addArgs() to object instances.
// Both Apply() and call() do the same thing.
addArgs.apply(addArgs1,[1,2,3,4]); // second argument is an array
addArgs.call(addArgs2, 5,6,7,8); // second argument are varargs representing an array


// result variable attaches to object instance
console.log(`addArgs1.result=${addArgs1.result}`);
console.log(`addArgs2.result=${addArgs2.result}`);
// result  variable attaches to new object instance
console.log(`addArgs3.result=${addArgs3.result}`);
// addArgs() called in global scope and result variable is also global
console.log(`result=${result}`);

assert(10, addArgs1.result);
assert(26, addArgs2.result);
assert(35, addArgs3.result);
assert(45, result);
