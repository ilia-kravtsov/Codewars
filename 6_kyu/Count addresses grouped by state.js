/*
Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}
The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}
The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.
*/

function count(addresses) {
  const stateCounts = new Map();

  for (let address of addresses) {
    if (!address.state) {
      throw new Error('An address is missing a state property.');
    }

    stateCounts.set(
      address.state,
      stateCounts.has(address.state) ? stateCounts.get(address.state) + 1 : 1
    );
  }

  const result = [];
  stateCounts.forEach((count, state) => {
    result.push({ state, count });
  });

  return result;
}