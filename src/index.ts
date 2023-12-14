import inquirer from 'inquirer';

const startThrottle = () => {
    inquirer.prompt([
        {
        type: 'confirm',
        name: 'name',
        message: 'click (y/N) to start transaction'
        }
    ])
    .then((message) => {
        if(message.name === true ){
            console.log("Start de function throttle it will take 3s to complete.")
            startAndWaitTransaction();
        }
    })
    .catch((error) => {
        console.log(error);
    });
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


  startThrottle();