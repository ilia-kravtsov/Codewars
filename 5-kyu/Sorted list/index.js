// Sorted list

/*
The task here is to create a class that maintains a sorted list of numbers in ascending order.

The class will have two methods:

add(x) will add x to the list

get(i) will get the ith value in the list

You should also provide a length property that gives the length of the list.
*/

function SortedList() {
  this.list = [];
}

SortedList.prototype.add = function(val) {
  let index = 0;
  while (index < this.list.length && this.list[index] < val) {
    index++;
  }

  this.list.splice(index, 0, val);
};

SortedList.prototype.get = function(i) {
  if (i >= 0 && i < this.list.length) {
    return this.list[i];
  } else {
    return undefined;
  }
};

Object.defineProperty(SortedList.prototype, 'length', {
  get: function() {
    return this.list.length;
  },
});