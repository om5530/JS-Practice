//we can not hoist arrow function or function is stored in some variable
//-------------
var x = 7;
function getname(x){
  var ans = x * x
  return ans
}

console.log(getname(x));
console.log(x)
console.log(getname)