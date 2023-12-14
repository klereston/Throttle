import Throttle from '../lib';

test('Transaction Finished!', (done)=>{
  const throttle = new Throttle()
  throttle.throttle()
  
  //the test will done after 4s while the throttle function is executed.
  setTimeout(()=>{
    done()
  }, 4000)
})



