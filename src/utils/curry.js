// Tiny, recursive autocurry
//Source: https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30
const curry = ( f, arr = [] ) =>
    (...args) => (
        a => a.length === f.length ?
            f(...a) :
            curry(f, a)
    )([...arr, ...args]);

module.exports = curry;
