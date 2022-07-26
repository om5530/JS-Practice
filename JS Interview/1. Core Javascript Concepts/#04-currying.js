// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?


// const multiply = (num1) => {
//    return (num2) => {
//     return num1 * num2
//    }
// }

//single liner
const multiply = num1 => num2 => num1 * num2 
console.log(multiply(2)(3))



const curry = function (fn) {
  let arity = fn.length
  console.log(arity)
  return function f1(...args) {
    console.log(args)
    if (args.length >= arity) {
      console.log('enough arguments')
      return fn(...args)
    } else {
      console.log('need more arguments')
      return function f2(...moreArgs) {
        let newArgs = args.concat(moreArgs)
        return f1(...newArgs)
      }
    }
  }
}
const curriedSum = curry((a, b, c) => a + b + c)
curriedSum(1, 2, 3)
console.log(curriedSum(1, 2, 3))

const partiallyCurriedSum = curriedSum(1)
console.log(partiallyCurriedSum(2, 3))