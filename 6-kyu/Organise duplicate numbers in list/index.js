/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/
function group(arr) {
  
  let result = [] // создаю результирующий массив
  
  const storage = {} // создаю объект в который потом помещу пары в виде ключ значения для того чтобы понимать какое число сколько раз повторяется
  
  for (let i = 0; i < arr.length; i++) {
      storage[arr[i]] = 0 // задаю изначальное значение 0 для каждого числа из arr
  }

  const keys = Object.keys(storage) // получаю массив уникальных чисел из arr (в виде строк)
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < keys.length; j++) {
          if (arr[i] === +keys[j]) {
              storage[arr[i]]++ // указываю сколько раз каждое число появляется в arr
          }
      }
  }

  const repeat = function (number, howManyTimes) { // функция для формирования результирующего массива, будет использована ниже
      let newElement = []
      for (let i = 0; i < howManyTimes; i++) {
          newElement.push(number)
      }
      result.push(newElement)
  }
  
  const newKeys = [...new Set(arr)] // формирую массив уникальных значений с сохранением изначальной сортирвки arr
  
  for (let j = 0; j < newKeys.length; j++) { 
      repeat(newKeys[j], storage[newKeys[j]]) // использую результирующую функцию с элементами которые обеспечат необходимый порядок добавления
  }

  return result
}
function group(arr) {
  return [...new Set(arr)].map(n => arr.filter(x => x == n));
}