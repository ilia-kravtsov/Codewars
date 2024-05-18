/*
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
*/

const frame = (text, char) => {
  let emptySpace = " ";
  let result = [];
  let longestWordLength = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].length > longestWordLength) {
      longestWordLength = text[i].length;
    }
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i].length < longestWordLength) {
      const difference = longestWordLength - text[i].length;
      text[i] = `${text[i]}${emptySpace.repeat(difference)}`;
    }
    if (text[i] === text[text.length - 1]) {
      result.push(text[i]);
    } else {
      result.push(text[i] + ` ${char}\n${char}`);
    }
  }

  const border = char.repeat(longestWordLength + 4);
  const borderUp = `${border}\n${char}`;
  const borderDown = `${char}\n${border}`;

  return `${borderUp} ${result.join(" ")} ${borderDown}`;
};
