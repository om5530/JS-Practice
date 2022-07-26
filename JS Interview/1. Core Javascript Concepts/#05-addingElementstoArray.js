// Write a function which get's an array and an element and returns a array with this element at the end


array = [1,2]


//solution 1
// const append = (arr, el) => {
//   arr.push(el)
//   return arr
// }
// console.log(append(array,3))
// console.log(array)  //push method modify old array







//solution 2
const append1 = (arr, el) =>{
  return [...arr,el]
}

console.log(append1(array,3))
console.log(array)  //spread method speads and copies the array