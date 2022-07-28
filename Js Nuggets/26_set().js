//set object - stores a collection of unique values of any type

//new set()
//add(value)
//delete(value)
//clear()
// has(value)

//iterators
//entries(),keys(),values(),forEach()

const unique = new Set();

unique.add('first');
unique.add('second');
unique.add('third');
unique.add('first');
unique.add(4);

const result = unique.delete('third');
console.log(result);

// unique.clear()  // clear all set

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);

// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table', 
    company: 'ikea',
  },
];

const companies = products.map((item) => item.company);
console.log(companies)

const uniqueCompanies = new Set(companies)
console.log(uniqueCompanies)

const finalCompanies = ['all',...uniqueCompanies]
console.log(finalCompanies)