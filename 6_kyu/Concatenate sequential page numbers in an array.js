/**
Say we run a site that manages informational books for students. If a students searches for a topic (say, 'Kangaroos'), our platform will give them a list or each page in their schoolbook that pertains to kangaroos.

We have a server and database that, given a query of a topic, will return us the page numbers the topic appears on. Problem is, if a topic appears on pages 20 through 50, we don't want to show the student of a list of each individual page ('20, 21, 22, 23....'), we would want to show them a page range, like '20-50'.

Your task:
Given an array of numbers, return a string, separated by commas, of each page in the array with sequential pages represented by a hyphenated range. The array must be in ascending order.

Example:
paginate([1,3,4,5,7,9,10]) => '1, 3-5, 7, 9-10'

paginate([13, 9, 11, 7, 12]) => '7, 9, 11-13'
The numbers in the returned string should be separated by one comma and one space.

Assumptions:
The given array will only contain positive integer numbers.
The array will never have duplicates.
Cautions:
The given array may not be sorted in ascending numerical order, but the returned string should be.
*/

function paginate(arr) {
  if (!arr.length) return ''; 

  arr.sort((a, b) => a - b);

  let result = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      result.push(start === end ? `${start}` : `${start}-${end}`);
      start = end = arr[i];
    }
  }
  result.push(start === end ? `${start}` : `${start}-${end}`);

  return result.join(', ');
}