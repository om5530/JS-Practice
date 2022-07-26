//reduce
//iterates, callback function
//reduces to a single value - number , array ,object
//1st parameter ('acc')  - total of all calculators
//2nd parameter ('curr') - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "dev", salary: 100 },
  { name: "peter", age: 20, position: "designer", salary: 300 },
  { name: "omkar", age: 30, position: "the boss", salary: 200 },
  { name: "anna", age: 34, position: "intern", salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total = total + person.salary;
  return total; //always return total otherwise ans will bw undefined
}, 0); //in place of zero we can set any initial value

console.log(dailyTotal);
