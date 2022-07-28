//Javascript Nuggests
//Timestamps

console.log(new Date());

//unix time
//january 1, 1970

//Date.now()
console.log(Date.now());
//new Date().getTime()
console.log(new Date().getTime());
//new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);

//create/get dates
console.log(new Date(1659004806737));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60 * 60 * 24); //24 hours ahead
console.log(futureDate);
console.log(new Date());

//difference between dates
const firstDate = new Date();
const secondDate = new Date(now + 1000 * 60 * 60 * 24);

const firstValue = firstDate.getTime( );
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);
const minutes = timeDifference / (1000 * 60);
console.log(Math.floor(minutes));

const hours = timeDifference / (1000 * 60 * 60);
console.log(Math.floor(hours));