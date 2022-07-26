// Write a function which can concatenate 2 arrays

//solution 1
// const mergeArrays = (arr1, arr2) => {
//   arr1.push(...arr2)             //push mutates original array  
//   return arr1
// }


//solution 2
// const mergeArrays = (arr1, arr2) => {
//  return arr1.concat(...arr2)
// }


//solution 3
const mergeArrays = ( arr1, arr2) => {
  return [...arr1,...arr2]
}


const arr1 = [1]
const arr2 = [2, 3]
const result = mergeArrays(arr1, arr2)
console.log(result, arr1, arr2)


