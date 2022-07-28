// fastest way to access/unpack variables from objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  sibilings: {
    sister: 'jane',
  },
};

const {
  first,
  last,
  city,
  sibilings: { sister },
} = bob;

console.log(first, last, city);

//const firstName = bob.first typical way to access object properties.
function printPerson({first,last,city,sibilings:{sister}}) {
  console.log(first,last,sister);
}
printPerson(bob);







let person = {
  firstName: 'John',
  lastName: 'Doe',
};

//---------------------//Object destructing

// let x = person.firstName;
// console.log(x)
// let lastName = person.lastName;

// const { firstName , lastName } = person

//spead oprator
//spread out the item and copies them

const udemy = 'orange';

const letters = [...udemy];
console.log(letters);

const boys = ['john ', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

friends = [...boys, bestFriend, ...girls];
console.log(friends);

//---------------------//rest oprator...
//gathers/collects item

const fruits = ['apple', ' orangle', 'lemon', 'banana'];
// const [first, ...rest] = fruits; //array destructuring

console.log(first, rest);

if (cond) {
} else {
}

// cond ? (if) : (else)
