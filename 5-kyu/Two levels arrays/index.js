// Two levels arrays
 
/*
You have to write an algorithm that flatten an arrays structure to 2 levels. It means that each array under the second level will be merge to its parent. Only two levels are kept.

Empty arrays are ignored.

var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
flattenTwoLevels(array); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) // should return [1,[2,3,4,5]]
*/

function flattenTwoLevels(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result.push(array[i].flat(Infinity))
        } else {
            result.push(array[i])
        }
    }
    return result
}