/*
What's a monad?

Quote from Wikipedia:

'In functional programming, a monad is a structure that represents computations defined as sequences of steps. A type with a monad structure defines what it means to chain operations, or nest functions of that type together. This allows the programmer to build pipelines that process data in steps, in which each action is decorated with additional processing rules provided by the monad'.

If you have not understood anything, this kata is for you.

Let's start with an example. It is a JavaScript adaptation of an exercise from the excellent book Learn You a Haskell for Great Good!.

Say you have a chess board and only one knight piece on it. We want to find out if the knight can reach a certain position in certain moves. We'll just use a pair of numbers to represent the knight's position on the chess board. The first number will determine the column he's in and the second number will determine the row: [c, r].

For example in this picture the knight is in [6, 2]:


In one movement he can reach the next squares:

[ [ 8, 1 ], [ 8, 3 ], [ 4, 1 ], [ 4, 3 ], [ 7, 4 ], [ 5, 4 ] ]
Your final job is to implement this function:
* from: actual position of the knight
* to: final position to test
* movements: num of movements
* returns: true if the knight could reach the "to square" starting in "from square" in "movements" steps | false otherwise
* ex: canReach([6, 2], [8, 1], 1) === true
* ex: canReach([6, 2], [8, 2], 1) === false
* ex: canReach([6, 2], [8, 1], 2) === false
* ex: canReach([6, 2], [8, 2], 2) === true
* ex: canReach([6, 2], [6, 2], 0) === true
* ex: canReach([6, 2], [8, 1], 0) === false
*
* canReach :: Square -> Square -> Int -> Boolean
function canReach(from, to, movements) {
}
Let's find out how to implement canReach(...)

But in this kata, we want to learn about Monads, not play chess.

So your first job is to implement this function:

* from: actual position of the knight
* returns: an array of valid position in one movement
* ex: moveKnight([6, 2]) -> [ [ 8, 1 ], [ 8, 3 ], [ 4, 1 ], [ 4, 3 ], [ 7, 4 ], [ 5, 4 ] ]
*
* moveKnight :: Square -> [Square]
         
function moveKnight(from) {
}
When you are done (the tests for this part are green), you should implement:

* from: actual position of the knight
* returns: a random valid position in one movement
* ex: moveKnightRandom([6, 2]) -> [ 8, 1 ]
* moveKnightRandom :: Square -> Square

         
function moveKnightRandom(from) {
}
From here is where things get interesting:

Let's implement the function compose():


* fn1 z -> t
* fn2 y -> z
* ...
* fnz x -> y
* returns: the composed function -> fn1(fn2(...fnz(x)))

function compose(fn1[, fn2, ...., fnz]) {
}
For example:


* addOne :: Number -> Number

function addOne(x) {
  return x + 1;
}


*        double :: Number -> Number
       
function double(x) {
  return x * 2;
}

var composed = compose (addOne, double); //compose is right associative

composed(3); //7 <- addOne(double(3))

compose(addOne, double, double)(3); //13
compose(compose(addOne, double), double)(3); //13


* wrap :: a -> [a]

function wrap(x) {
  return [x];
}

compose(wrap, addOne, double, double)(3); //[13]
OK. Now you can test the compose() function with moveKnightRandom(from):

var from = [6, 2];
var knightEngine = compose(moveKnightRandom, moveKnightRandom, moveKnightRandom); //It will perform three random  movements
var to = knightEngine(from); //Perfomrs the random movements starting at "from" square
Do you remember the canReach() function?

How could we implement this?

This auxiliary function might help us:


* fromPositions: array of starting squares
* returns: array of valid knight jumps in one movement
*
* moveKnightFromArray :: [square] -> [square]

function moveKnightFromArray(fromPositions) {
  return fromPositions.reduce(function(ac, from) {
    var to = moveKnight(from);
    return ac.concat(to);
  }, []);
}

moveKnightFromArray([[6,2], [7,6]]); // [ [ 8, 1 ],  [ 8, 3 ],  [ 4, 1 ],  [ 4, 3 ],  [ 7, 4 ],  [ 5, 4 ],  [ 5, 5 ],  [ 5, 7 ],  [ 8, 4 ],  [ 8, 8 ],  [ 6, 4 ],  [ 6, 8 ] ]

//moveKnightFromArray([[6,2], [7,6]]); -> returns valid positions from these starting squares
Suppose we need the valid squares in three knight movements. We could do this:

var positions = moveKnight([6, 2]); // first jump
positions = moveKnightFromArray(positions); // second jump
positions = moveKnightFromArray(positions); // third jump
This would work but it has two problems:

We have two functions, moveKnight and moveKnightFromArray, that differ only in the parameters they receive but they return the same data type (valid squares). You could argue that we could reduce them to a single function that receives an array always. But that would not be clean code: A function that has two responsibilities? (iterate an array, search for valid squares and finally compose the result). Then, why not do all the work inside canReach() function?
We cannot take advantage of function composition as we did with moveKnightRandom function.
In particular, we cannot do this:

compose(moveKnight, moveKnight, moveKnight);
Why doesn't this work?

moveKnight() function receives a square and returns an array of squares:

moveKnight :: square -> [square]
So:

moveKnight(moveKnight(square)); 
The external moveKnight() function will receive [square] instead a single square and it will fail.

Of course, in this simple example, the composition works for moveKnightFromArray():

(moveKnightFromArray(moveKnightFromArray([square])));
But as explained above, a function like this is a bad idea.

So, what can we do?

We can create a bind function that works as an intermediary between the types square and [square] and allows the composition:

bind :: (a -> [b]) -> ([a] -> [b])
bind receives a f function and returns a g function such that:

f is a function that receives a single value of a type (like Square, Number, String, ...) and returns an array of simple type b (a and b could be the same type).
The returned function, g, receives an array of a type and returns an array of b type. The returned array contains the values processed by the f function.
Do not confuse bind() with Function.prototype.bind(). Although they share the name and some features like partial application, they have a different purpose. bind is the default name for this function, so it is used here anyway.

For example:

//  wrapDouble :: number -> [number]
var wrapDouble = compose(wrap, double);
var value = 5;
var wrapValue = [value]; // [5]
How could we pass value to wrapDouble()?

Easy:

wrapDouble(value); // [10]
And... How could we pass wrapValue to wrapDouble()?

That's why we created the bind() function:

bind(wrapDouble)(wrapValue); // [10] Cool, isn't it?
Careful, your bind implementation should do this too:

bind(wrapDouble)([3, 4]); // [6, 8]
But, what happens if I wish to apply value to bind(wrapDouble)?

It does not work because bind(wrapDouble) expects an array of numbers.

We can create a simple unit() function:

unit :: a -> [a]
The unit function is just to wrap simple values into arrays.

unit(5); // [5]
So, we can do this:

bind(wrapDouble)(unit(6)); // [12]
Maybe you are wondering what is the big deal with unit(). We will see it soon.

Our bind function is composable. This means we can throw away the moveKnightFromArray() function.

And instead do this:

bind(moveKnight)(bind(moveKnight)([[6,2]])); // returns all valid squares after two movements
Or we can do the same in a fashion way:

compose(bind(moveKnight), bind(moveKnight))([[6,2]]); // returns all valid squares after two movements
Or in a more readable way:

var from = [6, 2];
var knightEngine = compose(bind(moveKnight), bind(moveKnight));
var validSquares = knightEngine(unit(from));
Or more simplified yet:

var from = [6, 2];
var knightEngine = compose(bind(moveKnight), bind(moveKnight), unit);
var validSquares = knightEngine(from);
Now you can see what is unit() function for.

Ok, now let's go to create knightEngine() function:

 from: starting square
* movements: quantity of movements to do
* returns: array with all possible valid squares
*
* knightEngine -> Square -> Int -> [Square]

function knightEngine(from, movements) {
}
The final step is to implement canReach() function:

function canReach(from, to, movements) {
}
Using knightEngine() function must be trivial.

So at the end: What is a monad?

(Monad m) => m a -> (a -> m b) -> m b
If you have a value of type a wrapped in something called Monad (as we have seen, an array can be used as a Monad) and a function that receives a simple value of type a and returns another value (possibly of a different type b) wrapped in a Monad, then the bind() function allows us to apply the Monad to the function in order to obtain a Monad of type b.

It's much more difficult to explain than to understand. Hence, Douglas Crockford says that monads are cursed
*/

function canReach(from, to, movements) {
  if (movements === 0) {
    return from[0] === to[0] && from[1] === to[1];
  }

  const possibleMoves = moveKnight(from);
  for (let move of possibleMoves) {
    if (canReach(move, to, movements - 1)) {
      return true;
    }
  }

  return false;
}

function moveKnight(from) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
  ];

  const validMoves = moves.map(move => [from[0] + move[0], from[1] + move[1]])
                          .filter(move => move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8);

  return validMoves;
}

function moveKnightRandom(from) {
  const validMoves = moveKnight(from);
  const randomIndex = Math.floor(Math.random() * validMoves.length);
  return validMoves[randomIndex];
}

function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function bind(f) {
  return function (arr) {
    return arr.reduce((acc, val) => acc.concat(f(val)), []);
  };
}

function unit(value) {
  return [value];
}

function knightEngine(from, movements) {
  const composedFunction = Array.from({ length: movements }, () => bind(moveKnight));
  const result = composedFunction.reduce((acc, fn) => fn(acc), unit(from));
  return result;
}