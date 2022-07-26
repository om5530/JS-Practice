// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1];

const minValue = Math.min(...arr)
const minArr = arr.filter(el => el === minValue)
console.log(minArr.length)