// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50

//solution 1
// const range = (start, end) => {
//   let result = []
//   for(let i = start ; i<= end; i++){
//      result.push(i)
//   }
//   return result
// }

//solution 2
const range = (start, end) => {
  return [...Array(end).keys()].map((el)=> el + start)
}


console.log(range(1,50))