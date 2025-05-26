/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.

*/
function isAgeDiverse(list) {
  let ageGroups = new Array(10).fill(false);

  for (let i = 0; i < list.length; i++) {
    let age = list[i].age;

    if (age >= 10 && age < 20) {
      ageGroups[0] = true;
    } else if (age >= 20 && age < 30) {
      ageGroups[1] = true;
    } else if (age >= 30 && age < 40) {
      ageGroups[2] = true;
    } else if (age >= 40 && age < 50) {
      ageGroups[3] = true;
    } else if (age >= 50 && age < 60) {
      ageGroups[4] = true;
    } else if (age >= 60 && age < 70) {
      ageGroups[5] = true;
    } else if (age >= 70 && age < 80) {
      ageGroups[6] = true;
    } else if (age >= 80 && age < 90) {
      ageGroups[7] = true;
    } else if (age >= 90 && age < 100) {
      ageGroups[8] = true;
    } else if (age >= 100) {
      ageGroups[9] = true;
    }
  }

  return ageGroups.every(group => group === true);
}