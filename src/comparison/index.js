const advanced = require("./advanced");
const simple = require("./simple");

/**
 * @desc
 * ## What?
 *
 * @example <caption>Using bubble sort with a custom compare function.</caption>
 * const { bubble } = require("node-sortable");
 *
 * const array = [
 *        { name: "John", age: 5 },
 *        { name: "Cersei", age: 1 },
 *        { name: "Ned", age: 4 },
 *        { name: "Aria", age: 2 },
 *        { name: "Tyrion", age: 8 }
 *    ],
 *    fnCompare = ( obj1, obj2 ) => {
 *        if( obj1.age < obj2.age )
 *            return -1;
 *        if( obj1.age > obj2.age )
 *            return 1;
 *        return 0;
 *    };
 *
 * const sorted = bubble( array, fnCompare );
 *
 * //sorted will equal:
 * // [
 * //     { name: "Cersei", age: 1 },
 * //     { name: "Aria", age: 2 },
 * //     { name: "Ned", age: 4 },
 * //     { name: "John", age: 5 },
 * //     { name: "Tyrion", age: 8 }
 * // ]
 *
 * @example <caption>Using bubble sort with the default compare function.</caption>
 * const { bubble } = require("node-sortable");
 *
 * const array = [ 5, 1, 4, 2, 8 ];
 *
 * const sorted = bubble( array );
 *
 * //sorted will equal: [ 1, 2, 4, 5, 8 ]
 */
module.exports = Object.assign( {}, advanced, simple );
