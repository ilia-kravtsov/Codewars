function reverseVowels(str) {
  const vowels = 'aeiouAEIOU';
  const chars = str.split('');
  const vowelChars = chars.filter(c => vowels.includes(c)).reverse();
  let index = 0;
  return chars.map(c => vowels.includes(c) ? vowelChars[index++] : c).join('');
}