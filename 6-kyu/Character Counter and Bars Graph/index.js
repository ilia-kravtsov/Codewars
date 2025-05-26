/**
  1) Given some text, count each alphabetic character's occurrence in it, regardless of the case.

2) Let's suppose you have to use an old terminal window to represent the occurrencies of each character in a text-based horizontal bar graph. The terminal has a maximum width, provided as parameter (max_units_on_screen), and you have to abide by it.

For example, if the maximum width is 80, your longest bar in the graph will be scaled to this size and all the others have to be represented and scaled proportionally to this size. Every unit of the bar will be represented by the character #. See examples below for typical output format.

3) The bars of the graph have to be sorted by number of occurrencies (from biggest to lowest, before getting scaled), then by alphabetic order of the letter (from a to z). Approximation of decimal numbers will happen on the lowest integer (for example: 57.1, 57.2, 57.68, 57.999 will all get reduced to 57 )

Example

Input:

count_and_print_graph("just a short text", 4)
Output:

t:####
s:##
a:#
e:#
h:#
j:#
o:#
r:#
u:#
x:#
Example 2

Input:

count_and_print_graph("just a short text", 23)
Output:

t:#######################
s:###########
a:#####
e:#####
h:#####
j:#####
o:#####
r:#####
u:#####
x:#####
*/

function countCharsBarGraph(text, maxw) {
  const counts = {};
  for (const char of text.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  const sortedChars = Object.keys(counts).sort((a, b) => {
    if (counts[b] === counts[a]) return a.localeCompare(b); 
    return counts[b] - counts[a]; 
  });

  const maxCount = counts[sortedChars[0]];

  let result = "";
  for (const char of sortedChars) {
    const barLength = Math.floor((counts[char] / maxCount) * maxw);
    result += `${char}:${"#".repeat(barLength)}\n`;
  }

  return result.trim();
}