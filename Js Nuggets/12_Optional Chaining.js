const people = [
  {
    name: 'bob',
    location: { street: '123main', timezone: { offset: '+7 :00' } },
  },
  {
    name: 'peter',
    location: { street: 'half street' },
  },
  {
    name: 'cheater',
    location: { street: 'subMain', timezone: { offset: '+9 :00' } },
  },
];

people.forEach((ele) => {
  // console.log(ele.name);
  // console.log(ele.location.timezone.offset)
  // console.log(
  //   ele.location && ele.location.timezone && ele.location.timezone.offset
  // );
  console.log(ele?.location?.timezone?.offset || 'hello world') //where ever undefined is there or block will run 
});

// console.log(true && 'hello world');
// console.log(false && 'hello world');
