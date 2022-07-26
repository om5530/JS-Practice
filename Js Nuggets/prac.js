

let person = {
  firstName: 'John',
  lastName: 'Doe',
};



//---------------------//Object destructing
// fastest way to access/unpack variables from objectss
// let x = person.firstName;
// console.log(x)
// let lastName = person.lastName; 

// const { firstName , lastName } = person




//spead oprator
//spread out the item and copies them

const udemy  ='orange';

const letters = [...udemy]
console.log(letters)

const boys = [ 'john ','peter','bob']
const girls = ['susan', 'anna' ]
const bestFriend = 'arnold'

  friends = [...boys, bestFriend, ...girls];
console.log(friends)




//---------------------//rest oprator...    
//gathers/collects item  


const fruits = ['apple',' orangle' ,'lemon','banana']
 const [first,...rest]= fruits //array destructuring



console.log(first,rest)






if(cond){

}else{

}

// cond ? (if) : (else)


