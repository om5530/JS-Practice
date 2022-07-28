//Javascript Nuggets
//ECMAScript 2022
//at() - takes integer and return the item at that index - string , array
//Top level Await - Basic Example

const score = [99, 90, 100];

const oldLast = score[score.length - 1];
console.log(oldLast);

const newLast = score.at(-1);
console.log(newLast);

const channel = 'Colding Addict';
console.log(channel.at(0));


 const resp =  await  fetch('https://www.course-api.com/react-tabs-project')
const  data = await resp.json()
console.log(data)
//data will be visible in browsers console