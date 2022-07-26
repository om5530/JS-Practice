//Unique values

const menu = [
  {
    name: "pasta",
    category: "breakfast",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pancakes",
    category: "breakfast",
  },
];

//const categories = menu.map((item)=>{ return item.category})
//or
const categories = menu.map((item) => item.category);
//
console.log(categories);

const UniqueCategories = new Set(menu.map((item) => item.category)); //set gives us only unique values
console.log(UniqueCategories); //If we see its output it its giving object but we want array so we will use spread operator

const UniqueCategoriesArray = [
  "apple",
  ...new Set(menu.map((item) => item.category)),
];
console.log(UniqueCategoriesArray);

const result = document.querySelector(".result");
result.innerHTML = UniqueCategoriesArray.map((category) => {
  return `<button>${category}</button>`;
}).join("");
//map - get all instances
//new set - narrow down
//['all',...] turn it back to array
