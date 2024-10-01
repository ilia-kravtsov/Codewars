/*
Find the most common Data Type within a given array.

For Example, ['1', '2', 2] should return 'string'.

If there are any ties at all then just return 'We got a tie!'
*/

class CommonDatatypes {
  
  check(arr){
    
      let typesBase = {
        string: 0,
        number: 0,
        boolean: 0,
        object: 0,
        function: 0,
        array: 0,
      }
      
      let fisrtMaxValue = 0

      for(let i = 0; i < arr.length; i++) {
        const type = typeof arr[i]
        typesBase[type]++
        if (typesBase[type] > fisrtMaxValue) {
          fisrtMaxValue = typesBase[type]
        }
      }

      const values = Object.values(typesBase)

      let secondArray = []
      let count = 0
      
      for(let i = 0; i < values.length; i++) {
        if (values[i] === fisrtMaxValue && count === 0) {
          count++
        } else {
          secondArray.push(values[i])
        }
      }

      const secondMaxValue = Math.max(...secondArray)

      if (fisrtMaxValue === secondMaxValue) {
        return 'We got a tie!'
      }

      const type = Object.keys(typesBase).find(key => typesBase[key] === fisrtMaxValue)
      
      return type
  }
}