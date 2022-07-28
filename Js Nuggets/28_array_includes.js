//Array include() - check if the item is an array
//useful in the conditional statements
const groceries = ['milk', 'bread', 'paneer'];
let randomItem = 'milk';
const isIncluded = groceries.includes(randomItem,0); //0 is index number
console.log(isIncluded);


if(groceries.includes(randomItem)){
  console.log(`Yeah! It's on the list`)
}