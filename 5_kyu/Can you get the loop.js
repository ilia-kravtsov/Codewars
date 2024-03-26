/*
You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Notes:

do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece
Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !! 
*/

function loop_size(node) {
  let tortoise = node;
  let hare = node;

  do {
    tortoise = tortoise.getNext();
    hare = hare.getNext().getNext();
  } while (tortoise !== hare);

  let count = 1;
  tortoise = tortoise.getNext();
  while (tortoise !== hare) {
    tortoise = tortoise.getNext();
    count++;
  }

  return count;
}