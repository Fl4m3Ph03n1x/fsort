const swap = require("../../utils/swap");

/**
 * @desc
 * ## What?
 *
 * Cocktail shaker sort ( aka bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, shuffle sort, shuttle sort ) is a variation of bubble sort that sorts in both directions on each pass through the list.
 * Like comb sort, it attacks the problem of turtles and provides marginal performance improvements, making it usually around 2x faster than bubble sort.
 *
 * | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * | O(n)            | O(nˆ2)            | O(nˆ2)        | O(1)                    | Yes     |
 *
 * ## When?
 *
 * Like comb sort, this algorithm improves on bubble sort and can be used when one requires consistent sort times at the cost of efficiency.
 *
 * ## Additional Info:
 *
 *  - [Wikipedia](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)
 *  - [GrowingWithTheWeb](http://www.growingwiththeweb.com/2016/04/cocktail-sort.html)
 *  - [GeeksforGeeks](https://www.geeksforgeeks.org/cocktail-sort/)
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
