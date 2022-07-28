//javascript nuggets

//fetch API - browser API ,for HTTP (AJAX) requests
//default - get requests , supports other methods as well
//returns Promise

const url = 'https://www.course-api.com/react-tours-project';

// fetch(url);
// fetch(url)
// .then((resp)=>resp.json()) 
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log( err)})





//With await on data variable
// const getTours = async ()=>{
//   try{
//     const resp = await fetch(url)
//     // console.log(resp)
//     const data = await resp.json()
//     // console.log(data);
//   }catch(err) {
//     console.log(err)
//   }
// }

// console.log(getTours())


//With .then() on data variable result will be same


const getTours1 = async () => {
  try {
    const resp = await fetch(url);
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

console.log(getTours1().then());


