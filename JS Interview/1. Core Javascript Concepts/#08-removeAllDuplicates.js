// Remove all duplicates in the array




//solution #1
// const uniqueArr = (arr) => {
//   return [...new Set(arr)]
// }

//solution #2
// const uniqueArr = (arr) => {
//  let result = []
//  arr.map((ele)=>{
//   if(!result.includes(ele)){
//     result.push(ele)       
//   }
// })
// console.log(result)
// return result
// }

//solution #3
const uniqueArr =  arr  => {
  return arr.reduce((acc,el)=>{
    return acc.includes(el) ? acc : [...acc,el]
  },[])
}

console.log(uniqueArr([1,2,2,1,3,5,4]))