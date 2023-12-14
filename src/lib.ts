

//funció throttle establirà un interval de temps entre les execucions

export default class Throttle {

  throttle = () => {
    new Promise((resolve, _rejects)=>{
      //Simulate a user click or interaction with the Prompit
        //message: 'Want to click to start the throttle (y/N)' !!True!!
      resolve(true)
    })
    .then((message) => {
        if(message === true ){
          console.log("Start de function throttle")
            startAndWaitTransaction();
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
}


const startTransaction = () => {
  return new Promise((resolve, _rejects) => {
       setTimeout(() => {
           resolve(true)
       }, 3000);
   });
};

async function startAndWaitTransaction() {
  const isFinished = await startTransaction();
  if(isFinished){
    console.log("the throttle function is finished!");
    startNewFunction();
  }
}

const startNewFunction = () =>{
    console.log("Start a new function!");
}