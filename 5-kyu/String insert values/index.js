/*
Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"
Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"
*/

var format = function (str, obj) {
    return str.replace(/\{([^{}]+)\}/g, (match, key) => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return obj[key];
        }
        return match;
    });
};