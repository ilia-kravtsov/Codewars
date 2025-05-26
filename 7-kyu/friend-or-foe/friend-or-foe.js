// in place operation solution
function friend(friends) {
  let writeIndex = 0;
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      friends[writeIndex++] = friends[i];
    }
  }
  friends.length = writeIndex;
  return friends;
}
​
// a solution with using additional memory
// function friend_2(friends){
//   let result = []
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length === 4) {
//       result.push(friends[i]);
//     }
//   }
//   return result;
// }