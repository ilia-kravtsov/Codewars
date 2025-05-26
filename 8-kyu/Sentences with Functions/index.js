/*
Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/
const Adam = has => has ? `Adam ${has}`: 'Adam.';
const has = a => `has ${a}`
const a = dog => `a ${dog}`
const dog = (is) => is ? `dog ${is}`: 'dog.'
const The = (name) => `The ${name}`
const name = (of) => `name ${of}`
const of = (the) =>  `of ${the}`
const the = (dog) => `the ${dog}`
const is = (also) => `is ${also}`
const also = (Adam) => `also ${Adam}`