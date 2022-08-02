
console.log(this === window);
let name1 = {
  firstname: 'omkar',
  lastname: 'baacha',
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname + ' ' + hometown + ' ' + state
  );
};

var name2 = {
  firstname: 'sachin',
  lastname: 'tendulkar',
};

//call method
//function borrowing
printFullName.call(name1, 'Dehradun', 'Uttarakhand');
printFullName.call(name2, 'Mumbai', 'Maharashtra');

//apply method the difference between call and apply is  just we send
//argument as a comma seperated values in  call and array element in apply
printFullName.apply(name2, ['Mumbai', 'Maharashtra']);

//bind method
let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharashtra');
console.log(printMyName);

function product1(name, price) {
  this.name = name;
  this.price = price;
}

function food(name,price){
  product1.call(this, name, price);
  this.category = "food"
}

console.log(new food('cheese',5).price)
