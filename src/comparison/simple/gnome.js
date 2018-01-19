const swap = require("../../utils/swap");

/**
 * @namespace Sort.Comparison.Simple.gnome
 * @desc
 * ## What?
 * Gnome sort ( aka stupid sort ) is an algorithm simillar to insertion sort, excpet that moving an element to its proper place is accomplished by a series of swaps like in bubble sort.
 *
 * It first finds the first element out of order and then swaps it, taking advantage of the fact that swapping an element can only add a new out of order adjacent pair next to the swapped elements.
 * On every swap it checks all previous elements.
 *
 * | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * | O(n)            | O(nˆ2)            | O(nˆ2)        | O(1) aux                | Yes     |
 *
 * ## When?
 *
 * Gnome sort can be seen as a simpler insertion sort implementation wise, but its true power lies in being a smarter bubble sort.
 * This happens because this algorithm intelligently reverses direction instead of making complete passes, so it should be used instead of the default bubble sort.
 *
 * ## Additional Info:
 *
 *  - [Wikipedia](https://en.wikipedia.org/wiki/Gnome_sort)
 *  - [NIST](https://xlinux.nist.gov/dads/HTML/gnomeSort.html)
 *  - [GeeksforGeeks](https://www.geeksforgeeks.org/gnome-sort-a-stupid-one/)
 */
const gnome = ( fnCompare, clonedArray  ) => {

    //optimized gnomeSort: https://en.wikipedia.org/wiki/Gnome_sort
    for(let i = 1; i < clonedArray.length; i++ ){
        let pos = i;
        while ( pos > 0 && fnCompare( clonedArray[pos - 1], clonedArray[pos]) > 0 ) {
            swap( clonedArray, pos - 1, pos );
            pos = pos - 1;
        }
    }

    return clonedArray;
};

module.exports = gnome;
