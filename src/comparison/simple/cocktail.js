const swap = require("../../utils/swap");

/**
 * @namespace Sort.Comparison.Simple.cocktail
 * @desc
 * ## What?
 * Bubble sort ( aka sinking sort ) is an algorithm that steps through a list comparing adjacent items and swapping then when necessary.
 * This pass through is completed until no more swaps are needed.
 *
 * | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * | O(n)            | O(nˆ2)            | O(nˆ2)        | O(1) aux                | Yes     |
 *
 * ## When?
 * When considering this algorithm, it is widely suggested to invest in other quadratic algorithms which generally produces faster results.
 *
 * This algorithm main strength is not used to sort but to detect elements out of order.
 * This happens because it is able to detect if an array is not ordered very rapidly and it can be executed in various sections of the array in parallel.
 *
 * ## Additional Info:
 *
 *  - [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
 *  - [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm)
 *  - [GeeksforGeeks](http://www.geeksforgeeks.org/bubble-sort/)
 *
 * ## Variations:
 * - Odd-even sort and cocktail sort are both parallel versions of this algorithm.
 * - In some cases, the the algorithm starts from right to left. This is usual with partially sorted arrays, or arrays with unsorted items added to the end.
 */
const cocktail = ( fnCompare, clonedArray  ) => {

    //optimized version: https://en.wikipedia.org/wiki/Cocktail_shaker_sort
    let beginIndex = 0,
        endIndex = clonedArray.length - 2;

    while( beginIndex <= endIndex ){

        let newBeginIndex = endIndex,
            newEndIndex = beginIndex;

        for(let i = beginIndex; i <= endIndex; i++){

            if( fnCompare( clonedArray[i], clonedArray[i+1]) > 0 ){
                swap(clonedArray, i, i + 1);
                newEndIndex = i;
            }
        }

        endIndex = newEndIndex - 1;

        for(let i = endIndex; i >= beginIndex; i--){

            if( fnCompare( clonedArray[i], clonedArray[i+1]) > 0 ){
                swap(clonedArray, i, i + 1);
                newBeginIndex = i;
            }
        }

        beginIndex = newBeginIndex + 1;
    }


    return clonedArray;
};

module.exports = cocktail;
