
/*
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid
*/
function sortEmotions(arr, order){
  // the main idea of my code is to convert the emotions into numbers
  // then sort numbers according to the order property
  // and then convert sorted array of numbers into emotions array in the appropriate order 
  let prepare = []
  const priority = {
    ':D' : 2,
    ':)' : 1,
    ':|' : 0,
    ':(' : -1,
    'T_T' : -2,
  }

  const priorityKeys = Object.keys(priority)

  for (let i = 0; i < arr.length; i++) {
    prepare.push(priority[arr[i]])
  }
  prepare.sort((a,b) => order ? b - a : a - b)
  const result = prepare.map(n => {
    for (const key in priority) {
      if (priority[key] === n) {
        return key
      }
    }
  })
  return result
}
function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}