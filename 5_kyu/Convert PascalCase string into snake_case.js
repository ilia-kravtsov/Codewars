/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"  
*/

function toUnderscore(string) {
  if (typeof string === "number") {
    return String(string);
  }
  return string
    .replace(/([A-Z])/g, '_$1') 
    .replace(/^_/, '')          
    .toLowerCase();             
}