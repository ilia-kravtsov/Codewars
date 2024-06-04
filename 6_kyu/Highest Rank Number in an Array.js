/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr){
  const freqMap = {};
    arr.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });

    let maxFreq = 0;
    let highestNum = 0;
    for (const [num, freq] of Object.entries(freqMap)) {
      if (freq > maxFreq || (freq === maxFreq && num > highestNum)) {
        maxFreq = freq;
        highestNum = num;
      }
    }

    return parseInt(highestNum); 
}