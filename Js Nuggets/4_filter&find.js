//filter-return a new array ,can manipulate the size of new array (unlike map),return based on condition

//find -returns single instance (object), return first match , if no match - undefined

const people = [
  { name: "bob", age: 40, position: "developer" },
  { name: "peter", age: 50, position: "backend" },
  { name: "anna", age: 20, position: "designer" },
  { name: "john", age: 25, position: "manager" },
  { name: "builder", age: 30, position: "intern" },
];console.log(person.name);
const fruits = ["apple", "chiku", "lemon"];
//filter

//If return true see console
const youngPeople = people.filter((person) => {
  //console.log(person)
  return true; //this is condition  //if condition is true then we return that item in the iteration  if condition is false we will not return that item in iteration
});
console.log(youngPeople);

//If return false see console
const youngPeople1 = people.filter((person) => {
  //if(person.age < 30){ //agr condition true ho tabhi item return hota hua
  //return people
  //OR
  //return person
  //}
  //Or
  return person.age < 30;
});
console.log(youngPeople1);
const dev = people.filter((person) => person.position === "developer");
console.log(dev);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.filter((item) => item > 5)); //keeping just true values
console.log(arr.map((item) => item > 5));

//no match
const seniorDev = people.filter((person) => person.position === "senior dev");
console.log(seniorDev);
//as we can see if  no match then it returns empty array

///find
const peter = people.find((person) => person.name === "peter");
console.log(peter);
//here we can see it returns object coz in array there are objects

const fruit = fruits.find((person) => person == "lemon");
console.log(fruit);
//here we can see it returns string coz in array there are strings

//no match
const oldPerson = people.find((person) => person.age > 55);
console.log(oldPerson);

//multiple matches -first match
const randomPerson = people.find((person) => person.age < 40);
console.log(randomPerson);

console.log(peter.position);
const anna = people.filter((person) => person.name == "anna");
console.log(anna); //using filter it gives an array so to access values next step
console.log(anna[0].position);
