{
  var a = 10;
  let b = 20;
  let c = 30;
}
console.log(a);
// console.log(b);

//-------------------
// Shadowing
var a = 100;
{
  var a = 10; //same name as global
  let b = 10;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
//so,if one has same anmed variable outside the block, the variable inside the block shadows the outside variable. This happens only for va//

// In case of let and const
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b);
}
console.log(b);
//100,both b's are in seperate spaces (one in block(20) and one in script(another arnitary memory space(100))).same is also true for const declations

//!--------------
// Illegal shadowing
let a = 20;
{
  let a = 20;
}
console.log(a)
//uncaught syntaxError: Identifier 'a' has already been declared.

//we cannot shadow let with var but it is valid to shadow a let using a let . Howeverwe can shadow var with let.
// All scope rules that work in function are same in arrow function too.
// since var is function scoped, it is nt a problem with the code below

let a = 20;
function x() {
  var a = 20;
}
