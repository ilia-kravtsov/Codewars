/*
> "What is your name" said Tim.
"My name" said the mouse "Is Dinglemouse".

> "What were you before the witch turned you into a mouse" said Rose.
"I was a banana" said Dingle the mouse, "So be careful. If you see her, run away!".
- Badjelly the Witch (12:32), Spike Milligan

Kata Task
Given a string of letters a, b, n how many different ways can you make the word "banana" by crossing out various letters and then reading left-to-right?

(Use - to indicate a crossed-out letter)

Example
Input

bbananana
Output

b-anana--
b-anan--a
b-ana--na
b-an--ana
b-a--nana
b---anana
-banana--
-banan--a
-bana--na
-ban--ana
-ba--nana
-b--anana
Notes
You must return all possible bananas, but the order does not matter
The example output above is formatted for readability. Please refer to the example tests for expected format of your result.
*/

var bananas = function (s) {
  const target = "banana";
  const results = [];

  function helper(idx, current, used) {
    if (current === target) {
      results.push(
        s
          .split("")
          .map((char, i) => (used.has(i) ? char : "-"))
          .join("")
      );
      return;
    }

    if (idx >= s.length || current.length > target.length) {
      return;
    }

    if (s[idx] === target[current.length]) {
      used.add(idx);
      helper(idx + 1, current + s[idx], used);
      used.delete(idx);
    }

    helper(idx + 1, current, used);
  }

  helper(0, "", new Set());
  return results;
};