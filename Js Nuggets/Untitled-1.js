//faster/eaiser way to access /unpack variable from array 

const fruits = [ 'orange','banana','lemon']
const friends = ['john','peter','anna','bob']


const fruit = fruits[0] 
const fruit1 = fruits[1]
const fruit2= fruits[2]

console.log(fruit ,fruit1 ,fruit2)

const [john,peter,anna,bob,omkar] = friends 
console.log(john,peter,anna,bob,omkar) 


let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second ,first] = [first,second]
console.log(first,second)