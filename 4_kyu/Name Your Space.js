/*
Finish the namespace function so that it sets or gets the value at the path specified. The first argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.

let stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
// results in {moreStuff: {name: 'the stuff'}}
If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.

namespace(stuff, 'moreStuff.name') // returns 'the stuff'
namesace(stuff, 'otherStuff.id') // returns undefined
*/

function namespace(root, path, value) {
  const parts = path.split(".");
  let current = root;
  if (arguments.length < 3) {
    for (let part of parts) {
      if (current == null || !(part in current)) return undefined;
      current = current[part];
    }
    return current;
  }
  for (let i = 0; i < parts.length - 1; i++) {
    let part = parts[i];
    if (
      !(part in current) ||
      typeof current[part] !== "object" ||
      current[part] === null
    ) {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
  return root;
}