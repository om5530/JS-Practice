//promises
// the main purpose of using promises is to avoid  callback hell

//Promises allows to us write async code in synchronous fashion

//constructor name new Promise

//pending , rejected , fulfilled.

let value = 2;
const promise = new Promise((resolve, reject) => {
  //these arguments are actually functions
  //   resolve('hello resolve')  // resolve == fullFilled
  // reject('Error man reject')   // reject == reject

  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve('You guessed correctly');
  } else {
    reject('Wrong Number');
  }  
});

// console.log(promise);

// .then() // method to access resolve //we can't access it like promise.value
// .catch() //is for reject

promise
  .then(function (anything) {
    console.log(anything);
  })
  .catch((anything) => {
    console.log(anything);
  });
