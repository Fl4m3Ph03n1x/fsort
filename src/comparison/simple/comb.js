const swap = require("../../utils/swap");

/**
 * @desc
 * ## What?
 *
 * Comb sort improves on bubble sort by attacking the specific factors that make it slow.
 * It does this by categorizing objects into rabits ( big values at the start of the list ) and turtles ( small values near the end of the list ) and by eliminating turtles which cause the original algorithm to be slow.
 * Once all the turtles are eliminated, it then runs bubble sort, which will have a complexity as close to O(n) as possible.
 * In this implementation the shrinkFactor is of 1.3, as suggested by the authors.
 *
 * | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * | O(n log n)      | O(nˆ2)            | O(nˆ2 / 2^p)  | O(1) aux                | Yes     |
 *
 * Where *p* is the number of increments.
 *
 * ## When?
 *
 * This algorithm trades the best case scenario of the most popular algorithms such as insertion sort for a better overall average run.
 *
 * There is no clear law that defines wether this algoirthm should be used instead of any of the others, but there are two important factors:
 *
 * - Consistency in execution time is important. In other popular algorithms the best case scenario varies wildly from the average, but in here the gap is smaller.
 * - When the data distribution is not uniform, this algoirthm may have better results than others since it addresses turtles.
 *
 * ## Additional Info:
 *
 * - [Wikipedia](https://en.wikipedia.org/wiki/Comb_sort)
 * - [NIST](https://xlinux.nist.gov/dads/HTML/combSort.html)
 * - [GeeksforGeeks](https://www.geeksforgeeks.org/comb-sort/)
 *
 * ## Variations:
 *
 * - Shellsort is a simillar algorithm where the array is sorted in every decreasing gap.
 * - Cocktail sort also addresses the issue of turtles, albeit less effectively
 */
const comb = ( fnCompare, clonedArray  ) => {

    //Basic implementation with default factor: https://en.wikipedia.org/wiki/Comb_sort
    let gap = clonedArray.length;
    let sorted = false;
    const shrinkFactor = 1.3;

    while(!sorted){
        gap = Math.floor( gap / shrinkFactor);

        if( gap > 1 ){
            sorted = false;
        }else{
            gap = 1;
            sorted = true;
        }

        let i = 0;
        while( i + gap < clonedArray.length ){
            if( fnCompare( clonedArray[i], clonedArray[i+gap]) > 0 ){
                swap(clonedArray, i, i + gap);
                sorted = false;
            }
            i = i + 1;
        }
    }

    return clonedArray;
};

module.exports = comb;
