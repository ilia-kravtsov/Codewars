// Object extend

/*
Description: 

Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
*/

// my solution to this task is given above: 

var extend = function(...input) { // принимаю все параметры в массив вне зависимости от их количества
    let result = {}; 
    for (let i = 0; i < input.length; i++) { 
        const inputEl = input[i]
        if (typeof inputEl === 'object') { 
          const inputKeys = Object.keys(inputEl) // инициализирую массив состоящий из ключей элемента объекта входящего массива
          for (let j = 0; j < inputKeys.length; j++) { 
              const key = inputKeys[j]; 
              if (!result.hasOwnProperty(key)) { // проверяю результирующий объект на наличие ключа указанного строкой выше
                  result[key] = inputEl[key] // создаю новую пару из этого ключа с соответствующим значением
              }
          }
        }
    }
    return result; 
}