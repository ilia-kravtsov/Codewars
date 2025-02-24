/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

var recoverSecret = function (triplets) {
  let graph = new Map();
  let inDegree = new Map();

  for (let [a, b, c] of triplets) {
    graph.set(a, new Set());
    graph.set(b, new Set());
    graph.set(c, new Set());
    inDegree.set(a, 0);
    inDegree.set(b, 0);
    inDegree.set(c, 0);
  }

  for (let [a, b, c] of triplets) {
    if (!graph.get(a).has(b)) {
      graph.get(a).add(b);
      inDegree.set(b, inDegree.get(b) + 1);
    }
    if (!graph.get(b).has(c)) {
      graph.get(b).add(c);
      inDegree.set(c, inDegree.get(c) + 1);
    }
  }

  let queue = [];
  for (let [char, degree] of inDegree) {
    if (degree === 0) queue.push(char);
  }

  let result = "";
  while (queue.length) {
    let char = queue.shift();
    result += char;
    for (let neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
};