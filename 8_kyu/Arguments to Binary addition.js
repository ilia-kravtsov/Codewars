/* 
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

const arr2bin = arr => arr.reduce((x,y) => x + (typeof y == 'number' ? y : 0), 0).toString(2)



const uefaEuro2016 = (teams, scores) => `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? `${teams[0]} won!` : scores[1] > scores[0] ? `${teams[1]} won!` : `teams played draw.`}`