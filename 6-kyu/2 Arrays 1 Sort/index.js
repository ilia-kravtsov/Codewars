/*
Imagine two arrays/lists where elements are linked by their positions in the array. For example:

HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];
Means I have 1 house, 6 cars,5 pens and 0 jeans.

Now if we sort one array we lose the connectivity. The goal is to create a sorting function that keeps the position link linkedSort(arrayToSort,linkedArray,compareFunction). So for every element that moves in arrayToSort(HowMany in the example), the corresponding element in linkedArray(Type in the example) needs to move similarly.

For example in Javascript:

//INPUT
HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];

//SORT
res = linkedSort(HowMany,Type,function(a,b){return a-b;})

//OUTPUT
HowMany === res === [ 0   ,   1   ,  5  ,  6  ];
Type       ===     ['jeans','house','pen','car'];
linkedSort(...) return the "arrayToSort" sorted only.

If no compare function is provided you should handle like an alphabetical sorting would do, e.g:

[-71,-6,35,0].sort() ===  [-6,-71,0,35] != [-71,-6,0,35]
Note: it is assumed that array are same length.
*/

function linkedSort(aToSort, aLinked, compare) {
  const indices = Array.from(aToSort.keys());

  const comparator =
    compare ||
    ((a, b) => {
      return String(a).localeCompare(String(b));
    });

  indices.sort((i, j) => comparator(aToSort[i], aToSort[j]));

  const sortedToSort = indices.map((i) => aToSort[i]);
  const sortedLinked = indices.map((i) => aLinked[i]);

  for (let i = 0; i < aToSort.length; i++) {
    aToSort[i] = sortedToSort[i];
    aLinked[i] = sortedLinked[i];
  }

  return aToSort;
}
