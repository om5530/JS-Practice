//Spread Operator...
//Allows and iterable to spread/expand individually inside reciever
//Split into single items and COPY them

const udemy = 'udemy';
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';
const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//reference
// const newFriends = friends

//copy
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

//Es2018 - ES8 Objects
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person,city:'chicago',name:'peter'};
console.log(person)
console.log(newPerson)
