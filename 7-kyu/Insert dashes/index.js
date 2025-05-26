/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
  let stringOfNums = `${num}`
  let result = ''
  for (let i = 0; i < stringOfNums.length; i++) {
    result += stringOfNums[i]
    if (stringOfNums[i] % 2 !== 0 && stringOfNums[i+1] % 2 !== 0 && i !== stringOfNums.length - 1) {
      result += '-'
    }
  }
  return result
}

function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}