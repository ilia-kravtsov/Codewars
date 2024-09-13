/*
Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

The supplied arguments will be objects, arrays and strings.

Examples:

{laura:4, adam:3} & {laura:4, adam:3} => true 
{adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
[{a:4},{b:3}] & [{b:3},{a:4}]) => true
{a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
'Hello' & 'Hello' => true
*/

function areEqual(value1, value2) {
  if (value1 === value2) return true;

  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) return false;

    return value1
      .slice()
      .sort(compareValues)
      .every((val, index) => areEqual(val, value2.slice().sort(compareValues)[index]));
  }

  if (isObject(value1) && isObject(value2)) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) return false;

    return keys1
      .sort()
      .every((key, index) => key === keys2.sort()[index] && areEqual(value1[key], value2[key]));
  }

  return false;
}

function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function compareValues(a, b) {
  if (typeof a === 'object' && typeof b === 'object') return 0;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}