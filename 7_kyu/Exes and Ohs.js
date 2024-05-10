/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
  let os = []
  let xs = []
  for (let i = 0; i < str.length; i++) {
    let caseDown = str[i].toLowerCase()
    if (caseDown === 'x') {
      xs.push(str[i])
    } else if (caseDown === 'o') {
      os.push(str[i])
    }
  }
  return os.length === xs.length
}