/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/
const remove = s => s.slice(s.length - 1) === '!' ? s.slice(0, -1) : s ;
function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}
const remove = s => s.replace(/!$/, '');