//string include() - check if a string contains another string.

// const firstName = 'john';

// const result = firstName.includes('j', 1);
// console.log(result);

const products = [
  { title: 'Leather Chair' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'a'
const filteredProducts = products.filter((product) => {
  product.title.toLowerCase().includes(text)
})
//this is used to search product in real time projects

console.log(filteredProducts)

// console.result = product.title.includes('le');
// console.log(result);
