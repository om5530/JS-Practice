function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
  const fullName = `${name} singh`;
  cb(fullName);
}

handleName('omkar', makeUpperCase);
handleName('omkar', reverseString);

handleName('susan', function (value) {
  console.log(value);
});

//OR arrow function

handleName('omkar', (value) => {
  console.log(value);
});

const btn = document.querySelector('#btn');

btn.addEventListener('mouseover', function () {
  console.log('hello mouseIn');
});

btn.addEventListener('mouseout', function () {
  console.log('hello mouseout');
});
