/*
Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Last line should not terminate in '\n'
'\n' is not included in the length of a line.
Gaps between words can't differ by more than one space.
Lines should end with a word not a space.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Lines with one word do not need gaps ('somelongword\n').
Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)
*/

function justify(text, width) {
  let words = text.split(" ");
  let lines = [];
  let currentLine = [];
  let currentLength = 0;

  words.forEach((word) => {
    if (currentLength + word.length + currentLine.length > width) {
      lines.push(currentLine);
      currentLine = [];
      currentLength = 0;
    }
    currentLine.push(word);
    currentLength += word.length;
  });

  if (currentLine.length) {
    lines.push(currentLine);
  }

  return lines
    .map((line, index) => {
      if (index === lines.length - 1 || line.length === 1) {
        return line.join(" ");
      }
      let totalSpaces =
        width - line.reduce((sum, word) => sum + word.length, 0);
      let gaps = line.length - 1;
      let spaceWidth = Math.floor(totalSpaces / gaps);
      let extraSpaces = totalSpaces % gaps;

      return line.reduce((justified, word, i) => {
        if (i === line.length - 1) return justified + word;
        let spaces = " ".repeat(spaceWidth + (i < extraSpaces ? 1 : 0));
        return justified + word + spaces;
      }, "");
    })
    .join("\n");
}