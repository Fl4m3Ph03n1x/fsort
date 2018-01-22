const swap = require("../../utils/swap");

/**
 * @desc
 * ## What?
 *
 * Selection sort divides the input list insto two lists: one with the ordered elements and one with the unordered elements.
 * It then switches elements between the two lists until the unordered list is empty.
 *
 * | Best-case perf.         | Worst-case perf.        | Average perf.           | Worst-case space perf.  | Stable  |
 * | :---------------------- | :---------------------- | :---------------------  | :---------------------  | :-----  |
 * |  O(nˆ2) comp., O(n) sw. | O(nˆ2) comp., O(n) sw.  | O(nˆ2) comp., O(n) sw.  | О(n) total, O(1) aux.   | No      |
 *
 * ## When?
 *
 * Amongst the simple quadradic algorithms, selections sort outperforms bubble sort and gnome sort most of the time.
 *
 * However, it suffers in comparision with insertion sort, which has better performance complexity.
 * Still, in situations where auxiliary memory is limited this algorithm is preferred.
 * Another important consideration when comparing with insertion sort is consistency. Because this algorithm always scans the entirity of the array,
 * it's performance is always the same, whereas with insertion sort, it widely depends on whether the input array is almost sorted or not.
 *
 * Still, even though selection sort is better than insertion sort when comparing the number of writes, it never outperforms cycle sort, which is optimized in order to minimize this factor.
 * This is usually important when the cost of writes is important, like when writing to Flash memory.
 *
 * ## Additional Info:
 *
 * - [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
 * - [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm)
 * - [GeeksforGeeks](http://www.geeksforgeeks.org/selection-sort/)
 *
 * ## Variations:
 *
 * - Heap sort is a modification of this algorithm that uses a heap data structure to find the lowest element. Given an N big enough, heap sort will be more efficient performance wise.
 * - Cocktail sort is a bi-directional version of this algorithm which finds both the minimum and maximum values of the list in each pass.
 * - Bing sort is a variant where the greatest value is found and moving all items with that value to the end of the new list.
 */
const selection = ( fnCompare, clonedArray ) => {

    //default non stable implementation: https://en.wikipedia.org/wiki/Selection_sort
    for( let j = 0; j < clonedArray.length - 1; j++ ){

        let iMin = j;
        for( let i = j + 1; i < clonedArray.length; i++ ){
            if( fnCompare( clonedArray[i], clonedArray[iMin] ) < 0 ){
                iMin = i;
            }
        }

        if( iMin !== j ){
            swap(clonedArray, j, iMin );
        }
    }

    return clonedArray;
};

module.exports = selection;
