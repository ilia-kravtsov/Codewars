/*
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

[1,3,2]  =>  [1,2,3]
*/

function sort(items) {
  const iterationCount = items.length - 1;

  /* 
  создаю внешний цикл, который будет запускать внутренний цикл относительно количества элементов в массиве кроме последнего.
  т.к. когда внешний цикл дойдёт последнего элемента, то сортировать массив уже не понадобится.
  */
  for (let j = 0; j < iterationCount; j++) {
    /* 
    создаю флаг который остановит запуск внутреннего цикла на случай если сортировать массив уже не будет нужно,
    а внешний цикл еще не выполнил все свои итерации.
    */
    let isSorted = true;

    for (let i = 0; i < iterationCount; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        let temporary = items[i];
        items[i] = items[i + 1];
        items[i + 1] = temporary;
      }
    }

    if (isSorted) break;
  }

  return items;
}
