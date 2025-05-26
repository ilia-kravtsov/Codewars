/*
Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...
Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
*/

function reverse_and_combine_text(str) {
  let words = str.split(" ");

  while (words.length > 1) {
    let newWords = [];
    for (let i = 0; i < words.length; i += 2) {
      let word1 = words[i].split("").reverse().join("");
      let word2 = words[i + 1] ? words[i + 1].split("").reverse().join("") : "";
      newWords.push(word1 + word2);
    }
    words = newWords;
  }

  return words[0];
}
