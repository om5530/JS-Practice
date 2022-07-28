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

const categories = menu.map((item) => item.category);
// console.log(categories);

const UniqueCategories =[...new Set(menu.map((item) => item.category))]; //set gives us only unique values
// console.log(UniqueCategories); 

const UniqueCategoriesArray = [
  "lunch",
  ...new Set(menu.map((item) => item.category)),
];//we can add on the fly


const result = document.querySelector(".result");
result.innerHTML = UniqueCategoriesArray.map((category) => {
  return `<button>${category}</button>`;
}).join("");


//map - get all instances
//new set - narrow down
//['all',...] turn it back to array
