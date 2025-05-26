/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
*/
function convertHashToArray(hash) {
  const keys = Object.keys(hash);
  const sortedKeys = keys.sort();
  const result = sortedKeys.map((key) => [key, hash[key]]);
  return result;
}
