//Map Method

//quokka.js -Extension
//returns a new array
//does not change the size of original array (unlike  filter)
//users values from original array when making new one

const people = [
  {
    name: "bob",
    age: 20,
    position: "dev",
  },
  {
    name: "anna",
    age: 24,
    position: "designer",
  },
  {
    name: "john",
    age: 29,
    position: "the boss",
  },
  {
    name: "danny",
    age: 30,
    position: "manager",
  },
];

//Method 1
const ages = people.map(function (person) {
  // console.log(person)
  //return 'hello world'
  // return person.age
  //return person.age * 2
}); //function is a callBack function
console.log(ages);

//Method 2
const ages1 = people.map((person) => person.age); //if function is of one line we can skip the curly brackets
console.log(ages1);

//method 3
const getAges = (person) => person.age;
const ages2 = people.map(getAges);
console.log(ages2);

//Method 4
const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((item) => `<h2>${item.name}</h2>`);
const result = document.querySelector("#result");

result.innerHTML = names.join('');  //our separator will be empty string
 