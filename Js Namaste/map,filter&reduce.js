const arr = [5, 1, 3, 2, 6]

//double - [10, 2, 6, 4, 12]
//tripe - [15, 3, 9 ,6, 10]
//binary - ["101", "1", "11", "10", "110"]


//map
function double(x) {
  return x * 2
}
function triple(x) {
  return x * 3
}
function binary(x) {
  return x.toString(2)
}
const square = arr.map(double)
const cube = arr.map(triple)
const binaryNumber = arr.map(binary)
console.log(square)
console.log(cube)
console.log(binaryNumber)


//filter
//filter odd values
function isOdd(x) {
  return x % 2
}
function isEven(x) {
  return x % 2 === 0
}
function isgreater(x) {
  return x > 4
}
const odd = arr.filter(isOdd)
const even = arr.filter(isEven)
const greater = arr.filter(isgreater)
console.log(odd)
console.log(even)
console.log(greater)



//reduce------------------
//sum 

// solution #1 normal way
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   return sum;
// }

//solution #2 using higher order function #reduce
const output = arr.reduce(function (acc, curr) {
  console.log(acc)
  console.log(curr)
  acc = acc + curr
  return acc
}, 0)

console.log(output)


//find max
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
console.log(findMax(arr))

const outputMax = arr.reduce(function (max, curr) {
  console.log(curr)
  console.log(max)
  if (curr > max) {
    max = curr
  }
  return max
}, 0)
console.log(outputMax)



//------------------------------------
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "omkar", lastName: "baacha", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "deepika", lastName: "padukone", age: 50 },
  { firstName: "elon", lastName: "musk", age: 50 },
]

//list of full names
const fullName = users.map((x) => {
  return `${x.firstName} ${x.lastName}`
})

console.log(fullName)

//----------------------------
const age = users.reduce((acc, curr) => {
  console.log(acc[curr.age])
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
  } else {
    acc[curr.age] = 1
  }
  return acc
}, {})
console.log(age)

//-------------------------------
const filter = users.filter((x) => {
 return x.age < 30
}).map((x) => x.firstName)

console.log(filter)




//-----------
const usingReduce = users.reduce((acc,curr)=> {
 if(curr.age < 30 ) { 
  acc.push(curr.firstName)
}
return acc 
},[])
console.log(usingReduce)


//  const x = [-3, 4, 7, 2, 4].reduce((acc, cur) => {
//   if (cur> 0) {
//     let R = cur**2;
//     acc.push(R);
//   }
//   return acc;
// }, []);

// // Result
// [16, 49, 4, 144]
// console.log(x)