const swap = require("../../utils/swap");

/**
 * @desc
 * ## What?
 *
 * Bingo is a variation of selection sort that repeatedly looks through the remaining items to find the greatest value and then moving all items with that value to the end of the list.
 *
 * | Best-case perf.         | Worst-case perf.        | Average perf.           | Worst-case space perf.  | Stable  |
 * | :---------------------- | :---------------------- | :---------------------  | :---------------------  | :-----  |
 * |  O(nˆ2) comp., O(n) sw. | O(nˆ2) comp., O(n) sw.  | O(nˆ2) comp., O(n) sw.  | О(n) total, O(1) aux.   | No      |
 *
 * ## When?
 *
 * This algorithm is to be used in lists that have repeated items, as it will perform better than the original Selection Sort for this specific cases.
 *
 * ## Additional Info:
 *
 * - [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
 * - [NIST](https://xlinux.nist.gov/dads/HTML/bingosort.html)
 */
const bingo = ( fnCompare, clonedArray ) => {

    //default non stable implementation: https://en.wikipedia.org/wiki/Selection_sort
    let max = clonedArray.length - 1;
    let nextValue = clonedArray[max];
    for( let i = max - 1; i >= 0; i-- ){
        if( fnCompare(clonedArray[i], nextValue) > 0 ){
            nextValue = clonedArray[i];
        }
    }

    while( max > 0 && fnCompare(clonedArray[max], nextValue)  === 0 ){
        max = max - 1;
    }

    let value;
    while( max > 0 ){
        value = nextValue;
        nextValue = clonedArray[max];
        for( let i = max - 1; i >= 0; i-- ){
            if( fnCompare(clonedArray[i], value) === 0 ){
                swap( clonedArray, i, max );
                max = max - 1;
            }else if( fnCompare(clonedArray[i], nextValue) > 0 ){
                nextValue = clonedArray[i];
            }
        }

        while( max > 0 && fnCompare(clonedArray[max], nextValue)  === 0 ){
            max = max - 1;
        }
    }
    return clonedArray;
};

module.exports = bingo;
