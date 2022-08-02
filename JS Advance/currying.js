let multiply = function (x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
};

//we can write like this or
console.log(multiply(2)(3)(4))

//like this both are same
let multiplyY = multiply(2)
let multiplyZ = multiplyY(3)
 console.log(multiplyZ(4))


 //Real world example
 let userObj = {
  name:'Omkar Baacha',
  uId:11190
 }

 function info(obj){
  return (name)=>{
    return obj[name]
  }
 }

 //---
 console.log(info(userObj)('name'))
 console.log(info(userObj)('uId'))

 //--
 let data = info(userObj)
 console.log(data('uId'))


 let x = '1234.12345'
 console.log(typeof parseInt(x))