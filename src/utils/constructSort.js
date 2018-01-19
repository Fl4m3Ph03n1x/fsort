const isFunction = require("./isFunction");
const curry = require("./curry");

const constructSort = sortFn => curry( ( fnCompare, array ) => {

    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    return sortFn( fnCompare, array.slice() );
});

module.exports = constructSort;
