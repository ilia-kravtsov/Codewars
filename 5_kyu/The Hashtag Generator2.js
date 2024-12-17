/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag (str) {
// ______________________________ 1 version:
  
//   if (str.length === 0 || str.trim().length === 0) return false;
//   let arr = str.split(' ');
//   arr = arr.filter(el => el !== '' && el !== ' ');
//   arr = arr.map(el => el[0].toUpperCase() + el.slice(1));
//   let result = ['#', ...arr].join('')
//   return result.length > 140 ? false : result
  
// ______________________________ 2 version:
  
//   if (!str.trim()) return false;
//   const result = '#' + str
//     .split(/\s+/) 
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//     .join('');

//   return result.length > 140 ? false : result;
  
//     const trimmedStr = str.trim();
  
// ______________________________ 3 version:
  
//   const trimmedStr = str.trim();
//   if (!trimmedStr) return false;
//   const capitalizedWords = trimmedStr
//     .split(/\s+/) 
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
//     .join('');
//   const hashtag = `#${capitalizedWords}`;
//   return hashtag.length > 140 || hashtag === '#' ? false : hashtag;
  
// ______________________________ 4 version:
  
 if (!str.trim()) return false; 
  const words = str.trim().split(/\s+/)
    .map(word => word[0].toUpperCase() + word.slice(1));
  const result = `#${words.join('')}`;
  return result.length > 140 || result === '#' ? false : result;
}