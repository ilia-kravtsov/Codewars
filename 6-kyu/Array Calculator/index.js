/*
In this Kata, you need to create an calculator out of an array input.

Example: evaluate(['10', '+', '20', '*','3']) // Returns 70 

For an case where expretion is not having the correct or valid input then it should return undefined.

evaluate(['10', '+', '20', '*','3', '*']) // Returns undefined 

evaluate(['+', '20', '*','3']) // Returns undefined 

evaluate(['10', '20', '*','3']) // Returns undefined 

Supported operations

Only plus(+) and multiply(*) binary operators Cosider priority of plus and multiply. 10 + 20 * 3 should return 70 not 90 i.e 10 + (20 * 3) not (10 + 20) * 3
Note: You could not able to use the eval function for this.
*/

function evaluate(arr) {
  if (arr.length % 2 === 0) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (isNaN(Number(arr[i]))) return undefined;
    } else {
      if (arr[i] !== "+" && arr[i] !== "*") return undefined;
    }
  }

  const stack = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === "*") {
      const prev = stack.pop();
      const next = arr[i + 1];
      stack.push(Number(prev) * Number(next));
      i += 2;
    } else {
      stack.push(arr[i]);
      i++;
    }
  }

  let result = Number(stack[0]);
  for (let i = 1; i < stack.length; i += 2) {
    result += Number(stack[i + 1]);
  }

  return result;
}
