/*
Goal
The goal is to count the number of words, chars and lines in a block of text. [Pretty much like the wc command].

Fill the parse method so that the 3 counters (wordCount, charCount & lineCount) are properly setted in the DocumentParser object.

Helper
In order to handle large blocks of text, you do not receive any string in the constructor or in the parse method.

Instead, you receive a Reader instance as a parameter of your DocumentParser constructor.

This reader expose only one method : getChunk()

Returns the following fragment of text from the file it is reading
Returns a string of random size
Returns at least one char
Returns an empty string when finished
Constraints
You have to call getChunk as many times as needed to fully read the file.
You cannot concatenete calls to getChunk: to simulate limited memory, each chunk must be parsed individually.
Regex are not allowed.
Technical note: This is to simulate the processing of every kind of file, especially huge files that cannot fits into memory.

Word boundaries
What is a word ? Keep it simple :

Words are separated with one or more space character(s), examples:
"Hello world" is 2 words
"Hello   world" is 2 words
"mother-in-law" is 1 word
Lines are separated with "\n"
"Hello\nworld" is 2 words
"Hello World.\nBraaaiiiiiiinnnnsss" is 3 words
Control character \n should be ignored in the character count
Punctuation is correctly located: no need to parse punctuation
Examples
"Hello World"

Chars: 11
Words: 2
Lines: 1
"Is it me, or you?"

Chars: 17
Words: 5
Lines: 1
"You can try, but you'll never catch me.\nBazinga!"

Chars: 47
Words: 9 (you'll = 1 word)
Lines: 2
*/

function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function () {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function () {
  let chunk;
  let inWord = false;

  while ((chunk = this.reader.getChunk()) !== "") {
    for (let i = 0; i < chunk.length; i++) {
      const char = chunk[i];

      if (char !== "\n") {
        this.charCount++;
      }

      if (char === "\n") {
        this.lineCount++;
      }

      if (char === " " || char === "\n") {
        if (inWord) {
          this.wordCount++;
          inWord = false;
        }
      } else {
        inWord = true;
      }
    }
  }

  if (inWord) {
    this.wordCount++;
  }

  if (this.charCount > 0 && chunk[chunk.length - 1] !== "\n") {
    this.lineCount++;
  }
};