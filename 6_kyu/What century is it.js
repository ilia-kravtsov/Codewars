/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year) {
  let century = Math.ceil(parseInt(year) / 100);

  let suffix = "th";
  if (century % 10 === 1 && century % 100 !== 11) {
    suffix = "st";
  } else if (century % 10 === 2 && century % 100 !== 12) {
    suffix = "nd";
  } else if (century % 10 === 3 && century % 100 !== 13) {
    suffix = "rd";
  }

  return century + suffix;
}