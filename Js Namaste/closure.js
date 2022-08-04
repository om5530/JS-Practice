function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
// console.log(z); //value of z is entire code of function y.

//!-------------------
// closure
function outer(){
  var a = 10;
  function inner(){
    console.log(a)
  }
  return inner
}
outer()();
// Inner function forms a colsure with its outer environment so sequence doesn't matter


//!=============x====================x=====================x====================x==================x================
// Data hiding ad encapsulation

//without closures
var count = 0;
function increment(){
  count++
}
//In the above code, anyone can access count and change it.

//with closures => put everything into a function
function counter(){
  var count = 0 ;
  function increment(){
    count++
  }
}
// console.log(count); //this will  give referenceError as count can't be accessed.

//?---
function counter(){
  var count = 0 ;
   return function increment(){
    count++
    console.log(count)
   }
  }

var counter1 = counter() //counter function has closure with count var 
counter1()  //increments counter

var counter2 = counter()
counter2() //here counter2 is whole new copy of counter function and it wont impact the output of counter1

//above code is not good in scalable,when you plan to implement decrement counter at a later stage.

//TO address this issue , we use *constructors
//Adding decrement counter and refactoring code;
function Counter(){
  var count = 0
  this.incrementCounter = function(){
    count++
    console.log(count);
  }
  this.decrementCounter = function(){
    count--;
    console.log(count)
  }
}
var counter1 = new Counter()
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter()
//returns 1 2 1