//"for in" loop - iterate over object properties
//not advised to use it on arrays,especially if the order is important 
//on array use 'for of' loop instead


const person = {
    name:'omkar',
    age:25,
    status : 'student'
}


for ( const single in person){
    console.log(`${single} : ${person[single]}`)
}