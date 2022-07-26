// Write a function which implements shuffle


const shuffleItems = (arr) => {
  return arr
  .map((item) => ({ sort: Math.random(), value: item }))
  .sort((item1, item2) => item1.sort - item2.sort)
  .map((a) => a.value)
}


console.log(shuffleItems([1,2,3,4,5,6,7]))