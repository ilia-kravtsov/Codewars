var Harshad = ( function() {
  'use strict';
​
  return {
    isValid: function( number ) {
      var digits = String(number).split('');
      var sum = digits.reduce(function(total, digit) {
        return total + Number(digit);
      }, 0);
​
      return number % sum === 0;
    },
​
    getNext: function( number ) {
      number++;
​
      while (!this.isValid(number)) {
        number++;
      }
​
      return number;
    },
​
    getSerie: function( count, start ) {
      start = start || 0;
​
      var result = [];
​
      while (result.length < count) {
        start = this.getNext(start);
        result.push(start);
      }
​
      return result;
    }
  };
​
} () );