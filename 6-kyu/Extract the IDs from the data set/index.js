/* 
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

function extractIds(data) {
  let ids = [];

  if (data && typeof data === 'object') {
    if (data.id) {
      ids.push(data.id);
    }
    if (Array.isArray(data.items)) {
      data.items.forEach((item) => {
        ids = ids.concat(extractIds(item));
      });
    }
  }

  return ids;
}