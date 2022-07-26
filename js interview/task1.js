const users = [
  {
    id: 1,
    name: "jack",
    isActive: true,
    age: 20
  },
  {
    id: 2,
    name: "john",
    isActive: true,
    age: 18
  },
  {
    id: 3,
    name: "mike",
    isActive: false,
    age: 30
  }
]

//Write code to get array of names from given array of users
//get back only active users
//sort users by age decending

let x = users.sort((user1, user2) => user1.age < user2.age ? 1 : -1  )
.filter((item) => item.isActive === true).map((ele) => {

  return ele.name
})

console.log(x)

//solution2
const names = [];
users.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names.push(users[i].name)
  }
}

console.log(names)


const names1 = [];
// solution 3
users.forEach((user) => {
  names1.push(user.name)
})

console.log(names1)