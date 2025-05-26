/*
Ser Byron is a hedge knight traveling the length and breadth of Westeros looking for employment and tournaments.

On his travels Ser Byron has drawn up a map of towns and castles where he can find lodging and hopefully employment as well as areas for camping in between.

His map is a simple grid:

[["Deepwood Motte",  "Shadow Tower",      "Castle Black",   "Eastwatch",      "Bay of Seals"],
 ["The Stony Shore",  "Torrhen's Square", "Winterfell",     "The Dreadfort",  "Karhold"],
 ["Flint's Finger",   "Barrowtown",       "Moat Cailin",    "White Harbour",  "Widow's Wat"],
 ["Pyke",             "Seagard",          "The Twins",      "Sisterton",      "The Fingers"],
 ["The Crag",         "Riverrun",         "Darry",          "The Eyrie",      "Gulltown"],
 ["Castamere",        "Acorn Hall",       "Harrenhal",      "Maidenpool",     "Dragonstone"],
 ["Lannisport",       "Stoney Sept",      "King's Landing", "Blackwater Bay", "Sharp Point"],
 ["High Garden",      "Bitterbridge",     "King's Wood",    "Storm's End",    "Evenfall"],
 ["Old Town",          "Horn Hill",       "Prince's Pass",  "Planky Town",    "Sunspear"]];
calculate where he might find himself after a time in the saddle given a starting position and a journey of directions and distances.

Example:
For ("Winterfell", S5), the output should be "King's Landing".

Input/Output
[input] string currentPos
The starting position.
Will be a string inside the map array.

[input] string directions
The directions.
Will be a string of cardinal directions with an integer separated by spaces.

[output] a currentPos
The final postion.
Will be a string inside the map array.

Errors
if the journey tries to leave Westeros the final destination can not be reached.

return if too far North "The Wall blocks your way"
return if too far in any other direction "You do not have a ship to cross this sea."
*/

var finalDestination = function(currentPos, directions) {
  var locales = [
    ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
    [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
    [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
    [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
    [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
    [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
    [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
    [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
    [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
  ];

  let currentRow, currentCol;
  for (let i = 0; i < locales.length; i++) {
    let colIndex = locales[i].indexOf(currentPos);
    if (colIndex !== -1) {
      currentRow = i;
      currentCol = colIndex;
      break;
    }
  }
  
  const steps = directions.split(' ');
  
  for (let i = 0; i < steps.length; i++) {
    const direction = steps[i][0]; 
    const distance = parseInt(steps[i].slice(1), 10); 
    
    switch (direction) {
      case 'N':
        currentRow -= distance;
        break;
      case 'S':
        currentRow += distance;
        break;
      case 'E':
        currentCol += distance;
        break;
      case 'W':
        currentCol -= distance;
        break;
    }
    
    if (currentRow < 0) {
      return "The Wall blocks your way";
    }
    if (currentRow >= locales.length || currentCol < 0 || currentCol >= locales[0].length) {
      return "You do not have a ship to cross this sea.";
    }
  }
  
  return locales[currentRow][currentCol];
};

