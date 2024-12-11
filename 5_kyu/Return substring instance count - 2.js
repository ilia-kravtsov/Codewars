/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )
so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') // should return 1
searchSubstr( 'aaa', 'aa' ) // should return 2
searchSubstr( 'aaa', '' ) // should return 0
searchSubstr( 'aaa', 'aa', false ) // should return 1
*/

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (searchText === "") {
    return 0;
  }

  let count = 0;
  let position = 0;

  while (true) {
    const index = fullText.indexOf(searchText, position);
    if (index === -1) {
      break;
    }
    count++;
    if (allowOverlap) {
      position = index + 1;
    } else {
      position = index + searchText.length;
    }
  }

  return count;
}