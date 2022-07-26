// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];






// #solution 1
// const isNameExist = (name, users) => {
//   let exists = false
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true
//     }
//   }
//   return exists
// }

//soltion 2
// const isNameExist = (name, users) => users.some((el)=> el.name === name)


//solution 3
// const isNameExist = (name,users) => {
//   const el = users.find(el => el.name === name)
//   return Boolean(el)
// }


//solution 4
const isNameExist = (name, users) => {
  const index = users.findIndex((el)=>el.name === name)
  return index > 0   ///if index is -1 then item is not available
}



console.log(isNameExist('John', users))