/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
function insideOut(x){
  const arr = x.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      if (arr[i].length % 2 === 0) {
        let firstPart = arr[i].slice(0, arr[i].length / 2)
        let secondPart = arr[i].slice(arr[i].length / 2)
        firstPart = firstPart.split('').reverse().join('')
        secondPart = secondPart.split('').reverse().join('')
        arr[i] = firstPart + secondPart
      } else {
        let firstPart = arr[i].slice(0, arr[i].length / 2)
        let secondPart = arr[i].slice(arr[i].length / 2 + 1)
        let middleLetter = arr[i].slice(firstPart.length)[0]
        firstPart = firstPart.split('').reverse().join('')
        secondPart = secondPart.split('').reverse().join('')
        arr[i] = firstPart + middleLetter + secondPart
      }
    }
  }
  return arr.join(' ')
}