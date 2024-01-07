// Binary Contiguous Array

/*
An array consisting of 0s and 1s, also called a binary array, is given as an input.

Task
Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.

Example
s = [1,1,0,1,1,0,1,1]
         |_____|
            |
         [0,1,1,0]

         length = 4
Note
0 <= length(array) < 120 000
*/

function binarray(a) {
  let count = 0;
  let maxLength = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < a.length; i++) {
    count += a[i] === 0 ? -1 : 1; 

    if (map.has(count)) { // Проверяю, содержит ли объект map ключ count.
      maxLength = Math.max(maxLength, i - map.get(count)); // Сохранение максимальной длины подмассива с равным количеством 0 и 1.
    } else { // если ключ count отсутствует в объекте map то 
      map.set(count, i); // Устанавливаю значениe i для ключа count в объекте map. 
    }
  }

  return maxLength;
}