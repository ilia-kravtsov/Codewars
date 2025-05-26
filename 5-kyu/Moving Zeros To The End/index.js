/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let nonZeros = []; // массив для хранения ненулевых элементов
  let zeros = []; // массив для хранения нулей
  
  // перебираем элементы входного массива
  for (let i = 0; i < arr.length; i++) {
    // если текущий элемент не равен 0, добавляем его в массив ненулевых элементов
    if (arr[i] !== 0) {
      nonZeros.push(arr[i]);
    } else { // в противном случае добавляем его в массив нулей
      zeros.push(arr[i]);
    }
  }
  
  // объединяем массив ненулевых элементов и массив нулей, чтобы получить итоговый массив
  return [...nonZeros, ...zeros];
}