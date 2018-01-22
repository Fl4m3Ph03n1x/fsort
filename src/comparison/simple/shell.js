/**
 * @desc
 * ## What?
 *
 * Shell sort ( aka Shell's method ) is an algorithm that starts by sorting pairs of elements far apart from each other and then reducing the separation gap progressively.
 * The algorithms complexity heavily depends on the gap sequence being used and determining the complexity is still an unknonw problem for many given gap sequences, thus remaining one of the most complex algorithms.
 * This implementation uses the gap sequence of `[701, 301, 132, 57, 23, 10, 4, 1]`, as defined Donal Shell.
 *
 * | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * | O(n log n)      | O(nˆ2)            | O(nˆ2)        | O(1) aux, O(n) total    | No      |
 *
 * ## When?
 *
 * While it has more operations than the quicksort, it also uses less call stack, thus making it useful for applications that have a limited stack size.
 * It can also be used as a sub-algorithm of introspection sort and sort advanced sorting algorithms.
 *
 * ## Additional Info:
 *
 * - [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
 * - [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
 * - [GeeksforGeeks](https://www.geeksforgeeks.org/shellsort/)
 */
//TODO: Add a way of allowing the user to specify sequences via optional 1st param
const shell = ( fnCompare, clonedArray  ) => {

    const gaps = [ 701, 301, 132, 57, 23, 10, 4, 1 ];
    let temp;
    for( const gap of gaps ){

        for(let i = gap; i < clonedArray.length; i++ ){
            temp = clonedArray[i];
            let j;
            for( j = i; j >= gap && fnCompare(clonedArray[ j - gap ], temp) > 0; j -= gap ){
                clonedArray[j] = clonedArray[j - gap];
            }
            clonedArray[j] = temp;
        }
    }

    return clonedArray;
};

module.exports = shell;
