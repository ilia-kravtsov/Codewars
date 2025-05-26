// Array.prototype.splice(from, count, insertItems...)

/*
Odd... Array.prototype.splice seems to have gone missing. Guess you'll have to re-write it.

The method you write should produce the same results as the original. I've given you the main features below, but you can look at MDN's page for further details.

The method should take 2 or more arguments:

The from argument provides an integer number, 0 or greater, to be used as the first index to start changing the array from.
The count argument provides an integer number, 0 or greater, that counts how many items should be removed from the from index onward.
Any further arguments passed in will be new items to be inserted into the array, starting from the from index. These extra arguments are optional.
The method should return an array containing all items removed by the splice, or an empty array if no items were removed. Changes to the array should be done in-place.
*/

Array.prototype.splice = function(from, count, ...insertItems) {
  const removedItems = this.slice(from, from + count);
  const remainingItems = this.slice(from + count);
  
  // обновляю массив 
  this.length = from;
  this.push(...insertItems, ...remainingItems);
  
  return removedItems;
};