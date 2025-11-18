function flattenMap(map) {
  const result = {};
  
  function traverse(obj, path) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = path ? path + '/' + key : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          traverse(obj[key], newPath);
        } else {
          result[newPath] = obj[key];
        }
      }
    }
  }
  
  traverse(map, '');
  
  return result;
}