/* 
Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/
function smartSum(...args) {
  const flattenedArgs = args.flat(Infinity).map((item) => Number(item));
  const sum = flattenedArgs.reduce(
    (acc, curr) => acc + (isNaN(curr) ? 0 : curr),
    0
  );
  return sum;
}
