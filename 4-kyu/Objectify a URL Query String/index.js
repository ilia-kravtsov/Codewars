/*
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
*/

function convertQueryToMap(query) {
  const result = {};

  if (!query) return result;

  query.split("&").forEach((pair) => {
    if (!pair) return;
    let [key, value] = pair.split("=");
    key = decodeURIComponent(key);
    value = value !== undefined ? decodeURIComponent(value) : "";

    const keys = key.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const part = keys[i];
      if (i === keys.length - 1) {
        current[part] = value;
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  });

  return result;
}