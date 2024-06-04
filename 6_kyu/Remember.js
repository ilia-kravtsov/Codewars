/*
Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"

Examples:
remember("apple") => returns ["p"]
remember("apPle") => returns []          // no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   // show "p" only once
remember('Pippi') => returns ["p","i"]   // "p" is repeated first
*/
function remember(str) {
  var repeatedChars = [];
  var seenChars = new Set();
  
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    if (str.indexOf(char) !== i && !seenChars.has(char)) {
      repeatedChars.push(char);
      seenChars.add(char);
    }
  }
  
  return repeatedChars;
}
//_______________________________________________________________ Sort arrays - 3


/*
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/
function sortme(courses) {
  return courses.sort((a, b) => {
    const [nameA, yymmA] = a.split("-");
    const [nameB, yymmB] = b.split("-");

    if (yymmA === yymmB) {
      return nameA.localeCompare(nameB);
    } else {
      return yymmA.localeCompare(yymmB);
    }
  });
}