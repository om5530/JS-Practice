//width /height - window ,any element
//innerHeight - window
//innerWidth - window
//getBoundingCLientRect() - any element

console.log('height', window.innerHeight);
console.log('height', window.innerWidth);


const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click',()=>{
  const dimensions = box.getBoundingClientRect()
  console.log(dimensions)
})