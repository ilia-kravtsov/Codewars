/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/
function getAges(sum,difference){
  if (sum < 0 || difference < 0) {
    return null
  } else {
    const second = (sum - difference) / 2
    const first = sum - second
    if (first < 0 || second < 0) {
      return null
    } else {
      return [first, second]
    }
  }
};